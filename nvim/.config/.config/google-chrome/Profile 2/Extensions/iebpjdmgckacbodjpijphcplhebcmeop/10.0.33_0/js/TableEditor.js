
class TableEditor {
  constructor(userConfig) {
    this.activityLogger_ = new ActivityLogger();
    this.actionLogger_ = new TableActionLogger(userConfig);
    this.userConfig_ = userConfig;
    this.selectedRow_ = null;
    this.selectedCol_ = null;

    this.table_ = null;
  }

  fetchAndRender() {
    this.fetchTable_()
        .then(table => this.renderTable_(table))
        .catch(err => this.handleError_(err));
  }

  fetchTable_() {
    return chrome.extension.getBackgroundPage().getLocalTableForEdit();
  }

  renderTable_(table) {
    if (!table) {
      return this.handleError_(new Error('Table data not present.'));
    }

    this.table_ = table;

    const dropdown = `
      <div class="dropdown">
        <button
            class="btn btn-default dropdown-toggle"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="true">
          <span class="caret"></span>
        </button>
        <ul class="dropdown-menu">
          <li class="dropdown-header">Other export actions</li>
          <li><a href="#" class="post-process-action">Post-Process Data (Filter/Transform)</a></li>
          <li><a href="#" class="generate-import-html">Copy the <span class="mono">=IMPORTHTML()</span> equation to clipboard</a></li>
          <li role="separator" class="divider"></li>
          <li class="dropdown-header">Other helpful shortcuts</li>
          <li><a href="#" class="create-blank-goog-sheet">Create a blank Google Sheet</a></li>
        </ul>
      </div>
    `;

    const wrapper = document.querySelector('.table-edit-wrapper');
    wrapper.innerHTML = `
      <div class="table-title">${table.title}</div>
      <div class="table-source">
        <span class="row-count"></span>
        <span class="source-url hidden">Source: <a href="${table.sourceUrl}" target="_blank">${table.sourceUrl}</a></span>
      </div>
      <div class="actions">
        <div class="select-actions">
          <input type="button" value="Delete header row" class="btn btn-default btn-delete-first-row" />  
          <input type="button" value="Delete row" class="btn btn-default btn-delete-row" />
          <input type="button" value="Delete column" class="btn btn-default btn-delete-col" />
          ${dropdown}
        </div>
        <div class="export-actions">
        </div>
      </div>
      <div class="advanced-wrapper"></div>
      <div class="table-responsive"><table class="table"><tbody></tbody></table></div>
    `;

    if (table.sourceUrl) {
      wrapper.querySelector('.table-source span.source-url').classList.remove('hidden');
    }

    this.renderDropdownActions_(wrapper.querySelector('.dropdown'));
    this.renderExportActions_(wrapper.querySelector('.export-actions'), !table.sourceUrl);

    wrapper
        .querySelector('.btn-delete-first-row')
        .addEventListener('click', this.handleHeaderRowDelete_.bind(this));
    wrapper
        .querySelector('.btn-delete-row')
        .addEventListener('click', this.handleRowDelete_.bind(this));
    wrapper
        .querySelector('.btn-delete-col')
        .addEventListener('click', this.handleColDelete_.bind(this));

    this.renderTableData_(table.tableDataArray);
    this.updateButtons_();

    if (!this.userConfig_.paidPro) {
      const upgradeCta = document.querySelector('.upgrade-cta');
      upgradeCta.classList.remove('hidden');
      upgradeCta.addEventListener('click', () => {
        window.open(chrome.extension.getURL("/upgrade.html?ref=table-edit"));
      });
    }
  }

  renderDropdownActions_(dropdown) {
    const hasTableIndex = this.table_.tableDef && this.table_.tableDef.index !== undefined;

    const dropdownActions = [
      ['.generate-import-html', this.handleGenerateImportHtml_.bind(this), hasTableIndex],
      ['.create-blank-goog-sheet', this.handleCreateBlankGoogleSheet_.bind(this), true],
      ['.post-process-action', this.handlePostProcess_.bind(this), true],
    ];
    dropdownActions.forEach(([selector, cb, enabled]) => {
      const el = dropdown.querySelector(selector);
      if (enabled) {
        el.addEventListener('click', cb);
      } else {
        const disabledTag = document.createElement('span');
        disabledTag.className = 'disabled';
        disabledTag.innerText = 'Disabled';
        el.appendChild(disabledTag);
      }
    });
  }

  renderExportActions_(actionWrapper, disableCloud=false) {
    const actions = [
      {
        icon: 'images/icon.clipboard.add.png',
        cb: this.handleCopy_.bind(this),
        title: chrome.i18n.getMessage('copyClipboardActionTooltip'),
        enabled: true,
      },
      {
        icon: 'images/icon.sheets.png',
        cb: this.handleGoogleSheets_.bind(this),
        enabled: true,
        title: chrome.i18n.getMessage('googleDocActionTooltip'),
      },
      {
        icon: 'images/icon.excel.svg',
        cb: this.handleExcel_.bind(this),
        enabled: this.userConfig_.paidPro,
        title: chrome.i18n.getMessage('excelActionTooltip'),
      },
      {
        icon: 'images/icon.csv.b.png',
        cb: this.handleCsv_.bind(this),
        enabled: this.userConfig_.paidPro,
        title: chrome.i18n.getMessage('csvActionTooltip'),
      },
      {
        icon: 'images/icon.markdown.png',
        cb: this.handleMarkdown_.bind(this),
        enabled: this.userConfig_.paidPro,
        title: chrome.i18n.getMessage('markdownActionTooltip'),
      },
      { className: 'sepa'},
      {
        icon: '/images/icon.cloud.128.png',
        cb: this.handleCloud_.bind(this),
        enabled: _TCAP_CONFIG.supportsCloud && !disableCloud,
        title: chrome.i18n.getMessage('cloudActionTooltip'),
      },
    ];

    actions.forEach(action => {
      if (action.className) {
        const el = document.createElement('div');
        el.className = action.className;
        actionWrapper.appendChild(el);
        return;
      }

      const btn = document.createElement('img');
      btn.src = chrome.extension.getURL('/') + action.icon;
      btn.title = action.title;
      if (action.enabled) {
        btn.classList.add('enabled');
        btn.addEventListener('click', action.cb);
      } else {
        btn.classList.add('disabled');
        btn.addEventListener('click', this.flashPro_.bind(this));
      }
      actionWrapper.appendChild(btn);
    });
  }

  renderTableData_(tableDataArray) {
    this.rowVals_ = [];

    document.querySelector('.table-edit-wrapper .row-count')
        .innerHTML = `Rows: ${tableDataArray.length}`;

    const tbody = document.querySelector('.table-edit-wrapper tbody');
    tbody.innerHTML = '';
    tableDataArray.forEach((rowData, i) => {
      this.rowVals_.push(rowData.join('-'));

      const tr = document.createElement('tr');
      rowData.forEach((cellData, j) => {
        const cellInner = document.createElement('div');
        cellInner.className = "_tc-cell-inner";
        cellInner.innerText = cellData || '';

        const td = document.createElement('td');
        td.appendChild(cellInner);
        tr.appendChild(td);

        if (i === 0) {
          td.addEventListener('click', this.selectCol_.bind(this, j));
        }
      });
      if (i !== 0) {
        tr.addEventListener('click', this.selectRow_.bind(this, i));
      }
      tbody.appendChild(tr);
    });
  }

  //// ROW/COL SELECTION/MOD

  selectRow_(rowIndex) {
    const rows = Array.from(document.querySelectorAll('tr'));
    rows.forEach(r => r.classList.remove('selected'));
    if (rowIndex === this.selectedRow_) {
      this.selectedRow_ = null;
    } else {
      this.selectedRow_ = rowIndex;
      rows[rowIndex].classList.add('selected');
    }
    this.updateButtons_();
  }

  selectCol_(colIndex) {
    const selectedCells = Array.from(document.querySelectorAll('td.selected'));
    selectedCells.forEach(r => r.classList.remove('selected'));

    if (colIndex === this.selectedCol_) {
      this.selectedCol_ = null;
    } else {
      const rows = Array.from(document.querySelectorAll('tr'));
      rows.forEach(r => {
        if (r.children && colIndex < r.children.length) {
          r.children[colIndex].classList.add('selected');
        }
      });
      this.selectedCol_ = colIndex;
    }
    this.updateButtons_();
  }

  updateButtons_() {
    document
        .querySelector('.btn-delete-first-row').disabled = !this.table_.tableDataArray.length;
    document
        .querySelector('.btn-delete-row').disabled = !Number.isInteger(this.selectedRow_);
    document
        .querySelector('.btn-delete-col').disabled = !Number.isInteger(this.selectedCol_);
  }

  handleHeaderRowDelete_() {
    this.activityLogger_.logEvent('TEdit.deleteHeaderRow');
    if (this.table_.pages > 1 && this.table_.tableDataArray.length) {
      const rowToDelete = this.table_.tableDataArray[0].join('-');
      const headers = [];
      this.rowVals_.forEach((rv, i) => {
        if (rv === rowToDelete) {
          headers.push(i);
        }
      });
      this.deleteRowAtIndex_(headers);
    } else {
      this.deleteRowAtIndex_([0]);
    }
  }

  handleRowDelete_() {
    this.activityLogger_.logEvent('TEdit.deleteRow');
    this.deleteRowAtIndex_([this.selectedRow_]);
  }

  handleColDelete_() {
    this.activityLogger_.logEvent('TEdit.deleteCol');
    this.table_.tableDataArray.forEach(row => {
      row.splice(this.selectedCol_, 1);
    });
    this.selectedCol_ = null;
    this.selectedRow_ = null;
    this.renderTableData_(this.table_.tableDataArray);
    this.updateButtons_();
  }

  deleteRowAtIndex_(rowIndexes) {
    rowIndexes.forEach(rowIndex => {
      this.table_.tableDataArray[rowIndex] = 'TC-DEL-EAT-ED';
    });
    this.table_.tableDataArray = this.table_.tableDataArray.filter(r => r !== 'TC-DEL-EAT-ED');
    this.renderTableData_(this.table_.tableDataArray);
    this.selectedRow_ = null;
    this.selectedCol_ = null;
    this.updateButtons_();
  }

  //// POST PROCESSING

  handlePostProcess_() {
    this.renderPostProcessor_();
  }

  renderPostProcessor_() {
    // Default / Saved Post Processor
    const functionText = window.localStorage['postProcessFn'] ||
`
(data) => {
  return data;
}
`;

    const wrapper = document.querySelector('.advanced-wrapper');
    wrapper.innerHTML = `
      <div class="post-processing-wrapper">
        <h5>Post-Processing</h5>
        <p>
          You can post-process the data below by writing a custom JavaScript function. The function
          takes an array of arrays as input and returns an array of arrays as output.
        </p>
        <pre contentEditable="true" class="post-process-fn" spellcheck="false">${functionText}</pre>
        <div class="actions">
          <input type="button" class="btn btn-danger btn-pp-revert-exit" value="Revert & Close" />
          <span class="divider"></span>
          <input type="button" class="btn btn-default btn-pp-revert" value="Revert" />
          <input type="button" class="btn btn-default btn-pp-preview" value="Preview" />
          <span class="divider"></span>
          <input type="button" class="btn btn-success btn-pp-apply" value="Apply" />
        </div>
      </div>
    `;

    const actions = [
      ['.btn-pp-preview', this.handlePostProcessPreview_.bind(this)],
      ['.btn-pp-apply', this.handlePostProcessApply_.bind(this)],
      ['.btn-pp-revert-exit', this.handlePostProcessExit_.bind(this)],
      ['.btn-pp-revert', this.handlePostProcessRevert_.bind(this)],
    ];
    actions.forEach(action => {
      const btn = wrapper.querySelector(action[0]);
      btn.addEventListener('click', action[1]);
    });
  }

  saveProcessFn_(functionText) {
    if (!functionText.startsWith('(data) => {')) {
      return;
    }
    window.localStorage['postProcessFn'] = functionText;
  }

  getPostProcessFn_() {
    const txt = document.querySelector('.post-process-fn').innerText.trim();
    try {
      if (!txt) {
        return { err: new Error("Please provide a post-processing function."), fn: null}
      }
      const fn = eval(txt);
      return { fn, txt };
    } catch (err) {
      return { err, fn: null}
    }
  }

  handlePostProcessPreview_() {
    const { fn, err, txt } = this.getPostProcessFn_();
    if (fn === null || err) {
      return this.handleError_(err || new Error("Post-processing function is invalid."));
    }

    try {
      const processedDataArray = fn(this.table_.tableDataArray);
      this.saveProcessFn_(txt);
      this.renderTableData_(processedDataArray);
    } catch (err) {
      return this.handleError_(err);
    }
  }

  handlePostProcessApply_() {
    const { fn, err } = this.getPostProcessFn_();
    if (fn === null || err) {
      return this.handleError_(err || new Error("Post-processing function is invalid."));
    }

    try {
      const processedDataArray = fn(this.table_.tableDataArray);
      this.table_.tableDataArray = processedDataArray;
      // Exit works because we've set the data to the new data.
      this.handlePostProcessExit_();
    } catch (err) {
      return this.handleError_(err);
    }
  }

  handlePostProcessExit_() {
    const wrapper = document.querySelector('.advanced-wrapper');
    wrapper.innerHTML = '';
    this.renderTableData_(this.table_.tableDataArray);
  }

  handlePostProcessRevert_() {
    this.renderTableData_(this.table_.tableDataArray);
  }

  //// EXPORT

  handleCreateBlankGoogleSheet_() {
    this.activityLogger_.logEvent('TEdit.createBlankGoogleSheet');

    const params = {
      url: _TCAP_CONFIG.newSheetsUrl,
      enablePastePrompt: false,
    };
    return new BrowserEnv().sendMessage(params);
  }

  handleGenerateImportHtml_() {
    this.activityLogger_.logEvent('TEdit.generateImportHtml');

    const {sourceUrl, tableDef} = this.table_;
    const { index } = tableDef;
    const fn = `=IMPORTHTML("${sourceUrl}", "table", ${index + 1})`;

    const params = {
      action: MessageAction.COPY_TABLE_STRING,
      tableString: fn,
    };

    new BrowserEnv()
        .sendMessage(params)
        .then(() => this.displayMessage_('=IMPORTHTML function text copied to clipboard.'))
        .catch(err => this.handleError_(err));
  }

  getDownloadFilename_() {
    // TODO(gmike): Possibly improve this. Use filename template (ExcelUtil.idToName)
    return `tablecapture-${Date.now()}`;
  }

  handleCloud_() {
    this.activityLogger_.logEvent('TEdit.cloud');

    // TODO(gmike): Handle this.
    if (this.table_ && this.table_.dynamic) {
      return this.displayMessage_("Dynamic tables are not currently supported.", "warning");
    }

    const {sourceUrl: url, tableDef} = this.table_;
    const tcAction = {outputFormat: OutputFormat.CLIPBOARD, messageAction: MessageAction.COPY};
    this.logTableAction_(tcAction)
        .then(() => this.actionLogger_.getLogDataForUrlAndDef(url, tableDef))
        .then(pageElement => {
          if (pageElement) {
            const { repros } = pageElement;
            if (repros && repros.length) {
              return chrome.extension.getBackgroundPage().saveTableForCloud(repros[repros.length - 1]);
            }
          }
          throw new Error("Unable to save table to Table Capture Cloud");
        })
        .catch(err => this.handleError_(err));
  }

  handleExcel_() {
    const tcAction = {outputFormat: OutputFormat.EXCEL, messageAction: MessageAction.EXCEL};
    this.logTableAction_(tcAction);

    this.activityLogger_.logEvent('TEdit.exportExcel');
    const sheetname = 'Sheet 1 via Table Capture';
    const filename = this.getDownloadFilename_();
    const opts = {
      numberAsNumber: this.userConfig_.numberAsNumber,
      numDecimalChar: this.userConfig_.numDecimalChar,
      numThousandChar: this.userConfig_.numThousandChar,
    };
    return ExcelUtil.exportArrayOfArraysToExcelP(this.table_.tableDataArray, sheetname, filename, opts);
  }

  handleCsv_() {
    const tcAction = {outputFormat: OutputFormat.CSV, messageAction: MessageAction.CSV};
    this.logTableAction_(tcAction);

    this.activityLogger_.logEvent('TEdit.exportCsv');
    const filename = this.getDownloadFilename_();
    return ExcelUtil.exportArrayOfArraysToCSVP(this.table_.tableDataArray, 'Sheet', filename, this.userConfig_.csvDelimiter);
  }

  handleMarkdown_() {
    this.activityLogger_.logEvent('TEdit.exportMarkdown');
    this.handleCopyToFormat_(OutputFormat.MARKDOWN);
  }

  handleCopy_() {
    this.activityLogger_.logEvent('TEdit.exportCopy');
    this.handleCopyToFormat_(OutputFormat.CLIPBOARD);
  }

  handleGoogleSheets_() {
    this.activityLogger_.logEvent('TEdit.exportGoogle');

    const tcAction = {outputFormat: OutputFormat.GOOG, messageAction: MessageAction.COPY};
    this.logTableAction_(tcAction);

    const params = {
      action: MessageAction.COPY_TABLE_STRING,
      tableString: this.getAsString_(OutputFormat.GOOG),
    };

    new BrowserEnv()
        .sendMessage(params)
        .then(() => {
          const params = {
            url: _TCAP_CONFIG.newSheetsUrl,
            outputFormat: OutputFormat.GOOG,
            enablePastePrompt: this.userConfig_.enablePastePrompt,
          };
          return new BrowserEnv().sendMessage(params);
        })
        .catch(err => this.handleError_(err));
  }

  handleCopyToFormat_(outputFormat) {
    const tcAction = {outputFormat, messageAction: MessageAction.COPY};
    this.logTableAction_(tcAction);

    const params = {
      action: MessageAction.COPY_TABLE_STRING,
      tableString: this.getAsString_(outputFormat),
    };

    new BrowserEnv()
        .sendMessage(params)
        .then(() => this.displayMessage_('Table copied'))
        .catch(err => this.handleError_(err));
  }

  getAsString_(outputFormat) {
    const str = TableUtil.arrayOfArraysToString(this.table_.tableDataArray, _TCAP_COPY_CONST.rowSeparator, _TCAP_COPY_CONST.colSeparator);
    return TableUtil.postProcessFinalString(str, outputFormat, _TCAP_COPY_CONST);
  }

  ////

  flashPro_() {
    const upgradeCta = document.querySelector('.upgrade-cta');
    upgradeCta.classList.add('flash');
    window.setTimeout(() => upgradeCta.classList.remove('flash'), 1500);
  }

  displayMessage_(message, alertType="success") {
    const wrapper = document.querySelector('.global-errors');
    wrapper.appendChild(createAlertPane(message, alertType, true));
  }

  handleError_(err) {
    const message = (err && err.message)
        ? `Error caught: ${err.message}`
        : 'Error caught!';
    const wrapper = document.querySelector('.global-errors');
    wrapper.appendChild(createAlertPane(message, 'danger', true));
  }

  logTableAction_(tcAction) {
    const {sourceUrl: url, pageTitle, tableDef} = this.table_;
    if (this.table_.paged || this.table_.dynamic) {
      return this.actionLogger_.logPublishableTableAction(this.table_, tcAction);
    }
    if (tableDef) {
      return this.actionLogger_.logWrapperDefAction([tableDef], tcAction, url, pageTitle);
    }
    // TODO(gmike): Handle this.
    return Promise.resolve();
  }
}
