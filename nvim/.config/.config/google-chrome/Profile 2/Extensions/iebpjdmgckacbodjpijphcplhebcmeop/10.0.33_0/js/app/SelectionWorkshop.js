

class SelectionWorkshop {
  constructor(tabId, userConfig, selectionNode, installDate) {
    this.tabId_ = tabId;
    this.userConfig_ = userConfig;
    this.selectionNode_ = selectionNode;
    // NOTE(gmike): Install date doesn't always come in, so when not present, default to true.
    this.payToPage_ = installDate === undefined || installDate > _TCAP_CONFIG.maxPagingFreeDate;

    this.pageUrl_ = window.location.href;

    this.frame_ = new WorkshopFrame(userConfig);
    this.frame_.bindToEvent(WorkshopEvent.BETA, this.launchBetaModal_.bind(this));
    this.frame_.bindToEvent(WorkshopEvent.REMOVE, this.handleRemove_.bind(this));
    this.frame_.bindToEvent(WorkshopEvent.CLEAR, this.handleSelectionModeClear_.bind(this));
    this.frame_.bindToEvent(WorkshopEvent.TOOLTIP_SHOW, this.displayTooltipText_.bind(this));
    this.frame_.bindToEvent(WorkshopEvent.TOOLTIP_CLEAR, this.clearTooltipText_.bind(this));
    this.frame_.bindToEvent(WorkshopEvent.FRAME_EXPAND, this.handleFrameExpandRequest_.bind(this));
    this.frame_.bindToEvent(WorkshopEvent.FULLSCREEN_ENTER, this.handleFullFrameToggleRequest_.bind(this, true));
    this.frame_.bindToEvent(WorkshopEvent.FULLSCREEN_EXIT, this.handleFullFrameToggleRequest_.bind(this, false));
    this.frame_.bindToEvent(WorkshopEvent.SEARCH, this.handleSearchInit_.bind(this));

    this.isFrameFull_ = false;
    this.latestDataArray_ = null;
    this.treatAsTable_ = true;

    this.contentWrapper_ = this.frame_.render();

    this.sheetsSyncBridge_ = new SheetsSyncBridge(tabId);

    //// Everything below here should be isolated.
    this.robot_ = null;
    this.snoop_ = null;
    this.identityColumns_ = {};
    this.scrollInterval_ = null;
    this.autoPager_ = null;
    this.pagingListener_ = new PagingListener({
      pagerMissing: this.handlePagerMissing_.bind(this),
    });
    this.pagingContinuationKey_ = null;
    this.pathToPagedElement_ = null;
    this.selectorForPagedElement_ = this.pagingListener_.getPagedElementUserQuerySelector();
    this.pathToPager_ = null;
    this.pagerSelector_ = null;
    this.pagingRetryCount_ = 0;
    this.pagingRetryTimeout_ = null;
    this.contextMenuElement_ = null;

    this.tableWrapper_ = null;
    this.selectionWrapper_ = null;
    this.jsonWrapper_ = null;
    this.recipeWrapper_ = null;

    this.tooltipTimeout_ = null;
    this.clearTooltipTimeout_ = null;
    this.handleSelectionFn_ = this.handleSelectionChange_.bind(this);

    this.errorMessage_ = null;
    this.windowFrame_ = null;
  }

  getElementWrapper_() {
    if (this.recipeWrapper_) {
      return this.recipeWrapper_;
    }
    if (this.jsonWrapper_) {
      return this.jsonWrapper_;
    }
    return this.tableWrapper_ || this.selectionWrapper_;
  }

  bindToWindowFrame(windowFrame) {
    this.windowFrame_ = windowFrame.contentWindow;
    this.selectionNode_ = _tcGetSelectedNodeFromSelection(this.windowFrame_);
  }

  isPagingToggleOn_() {
    const checkbox = this.contentWrapper_.querySelector('.paged-recording-checkbox');
    return checkbox && checkbox.checked;
  }

  isRecordingToggleOn_() {
    const checkbox = this.contentWrapper_.querySelector('.recording-checkbox');
    return checkbox && checkbox.checked;
  }

  isRecording_() {
    return this.snoop_ && this.snoop_.isRecording();
  }

  isOrHasEverRecorded_() {
    return this.snoop_ && (this.snoop_.hasNewValues() || this.snoop_.isRecording());
  }

  hasElWrapper_() {
    return (!!this.tableWrapper_ || !!this.selectionWrapper_);
  }

  isWrapperRecordable_() {
    return (!!this.tableWrapper_ || !!this.selectionWrapper_ ||
        (this.recipeWrapper_ && this.recipeWrapper_.isRecordable()));
  }

  destroy(userInitiated) {
    const elWrapper = this.getElementWrapper_();
    if (elWrapper) {
      elWrapper.unhighlight();
    }

    this.frame_.setLoading(false);

    this.recipeWrapper_ = null;
    this.jsonWrapper_ = null;
    this.tableWrapper_ = null;
    this.selectionWrapper_ = null;
    this.selectionNode_ = null;
    this.setTreatAsTable_(true);

    if (this.scrollInterval_) {
      this.toggleTableScroll_();
    }

    this.identityColumns_ = {};
    if (this.snoop_) {
      this.snoop_.destroy();
      this.snoop_ = null;
    }

    if (userInitiated) {
      this.pagingListener_.destroy();

      this.contentWrapper_.classList.remove('has-paging-data');
      this.contentWrapper_.classList.remove('paging-on');
    }

    this.isFrameFull_ = false;
    this.latestDataArray_ = null;

    try {
      document.removeEventListener('selectionchange', this.handleSelectionFn_);
    } catch (err) {}

    this.errorMessage_ = null;
    this.pagingRetryCount_ = 0;
    this.pagingRetryTimeout_ = null;

    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
  }

  toggleIdentityColumn_(columnIndex) {
    const columnIndexString = String(columnIndex);
    if (this.identityColumns_.hasOwnProperty(columnIndexString)) {
      delete this.identityColumns_[columnIndexString];
    } else {
      this.identityColumns_[columnIndexString] = true;
    }
    return !!this.identityColumns_[columnIndexString];
  }

  isPaging(key) {
    if (!key) {
      return this.pagingListener_.isPaging();
    }
    return this.pagingListener_.isPaging() && this.pagingContinuationKey_ === key;
  }

  setPagingData(priorData, count, continuationKey, treatAsTable, pathToElement, pathToPager, pagerSelector, autoPageTable) {
    this.pathToPagedElement_ = pathToElement;
    this.pathToPager_ = pathToPager;
    this.pagerSelector_ = pagerSelector;

    this.pagingContinuationKey_ = continuationKey;
    this.setTreatAsTable_(treatAsTable);
    this.pagingListener_.setData(priorData, true);
    this.pagingListener_.setCount(count + 1);
    this.pagingListener_.setPaging(true);
    this.pagingListener_.setAutoPage(autoPageTable);
  }

  setContextMenuElement(contextMenuElement) {
    if (isNodeWorkshopChild(contextMenuElement)) {
      return;
    }

    this.contextMenuElement_ = contextMenuElement;
    if (this.contextMenuElement_ && this.pagingListener_ && this.isPagingToggleOn_()) {
      Array
          .from(document.querySelectorAll('._tc-highlight-pager'))
          .forEach(el => el.classList.remove('_tc-highlight-pager'));
      this.contextMenuElement_.classList.add('_tc-highlight-pager');
      this.pagingListener_.setContextMenuElement(this.contextMenuElement_);
    }
  }

  updateVisibilities_() {
    const hasEverRecorded = this.isOrHasEverRecorded_();
    const paging = this.isPagingToggleOn_();
    const usingArb = !!this.selectionWrapper_;

    const showArbNav = usingArb && !hasEverRecorded && !paging;
    this.updateArbNavElements_(!showArbNav, usingArb);

    this.contentWrapper_.querySelector('.table-recording').classList.toggle('ghosted', paging);
    this.contentWrapper_.querySelector('.table-paging').classList.toggle('ghosted', hasEverRecorded);

    this.updateColumnifyButton_(false);
  }

  renderRecipeMode(recipe) {
    if (!this.selectionNode_) {
      return this.handleSelectionRenderError_(new Error('Recipe page element not found.'), 'Recipe page element not found.');
    }

    const windowName = _tcGetWindowName(window);
    const pageUrl = window.location.href;
    const pageTitle = document.title;
    this.recipeWrapper_ = new RecipeTableWrapper(
        recipe, this.selectionNode_, pageUrl, pageTitle, windowName, this.userConfig_);

    this.frame_.setLoading(true);
    this.renderDataPreview_(this.recipeWrapper_.getData())
        .then(() => {
          this.renderSettings_();
          this.updateArbNavElements_(true, false);
          this.updateTableRecordingVisibility_(!this.recipeWrapper_.isRecordable());
          this.updateTablePagingVisibility_(true);
          this.updateRecipeControlsVisibility_();
        })
        .catch(err => this.handleSelectionRenderError_(err, 'Unable to render recipe data.'))
        .finally(() => this.frame_.setLoading(false));
  }

  updateRecipeControlsVisibility_() {
    document
      .querySelector('._tc-recipe-controls')
      .classList.remove('tc-hidden');
  }

  clipRecipeData_() {
    const dataClipper = new DataClipper(this.userConfig_);
    dataClipper.clipAndSaveRecipe(this.recipeWrapper_.getRecipe(), true);
    this.frame_.renderSuccess('Recipe data clipped.');
  }

  viewRecipeClipData_() {
    const recipe = this.recipeWrapper_.getRecipe();
    window.open(chrome.extension.getURL(`/clips.html?id=recipe-${recipe.id}`));
  }

  renderJsonMode_(needle, responses, responseIndex=0) {
    _tcLogEvent('SWorkshop.renderJsonMode_');

    const elWrapper = this.getElementWrapper_();
    if (elWrapper) {
      elWrapper.unhighlight();
    }

    this.jsonWrapper_ = new JsonTableWrapper(this.pageUrl_, this.userConfig_);

    this.frame_.setLoading(true);
    this.jsonWrapper_
        .processJsonResponses(needle, responses, responseIndex)
        .then(() => this.renderDataPreview_(this.jsonWrapper_.getData()))
        .then(() => {
          this.renderSettings_();
          this.renderResponseViewer_(needle, responses, responseIndex);
          this.updateArbNavElements_(true, false);
          this.updateTableRecordingVisibility_(true);
          this.updateTablePagingVisibility_(true);
        })
        .catch(err => this.handleSelectionRenderError_(err, 'Unable to render json response data.'))
        .finally(() => this.frame_.setLoading(false));
  }

  autoRetryPagingDueToError_() {
    if (this.pagingRetryTimeout_) {
      return;
    }

    // Exponential back-off.
    const timeoutDuration = Math.pow(2, this.pagingRetryCount_) * _TCAP_CONFIG.pagingRetryDelay;

    this.pagingRetryCount_++;
    this.pagingRetryTimeout_ = window.setTimeout(() => {
      this.pagingRetryTimeout_ = null;
      this.renderPagingMode(false);
    }, timeoutDuration);
  }

  handlePagingModeSuccess_() {
    this.pagingRetryCount_ = 0;
    if (this.pagingRetryTimeout_) {
      window.clearTimeout(this.pagingRetryTimeout_);
      this.pagingRetryTimeout_ = null;
    }
  }

  retrySelectPagedElement_() {
    if (this.selectorForPagedElement_) {
      this.selectionNode_ = _tcGetSingleElementBySelector(this.selectorForPagedElement_);
      if (this.selectionNode_) {
        // Save it if it's good.
        if (this.pagingListener_) {
          this.pagingListener_.savePagedElementUserQuerySelector(this.selectorForPagedElement_);
        }
        return;
      }
    }
    
    if (this.pathToPagedElement_) {
      this.selectionNode_ = _tcGetElementByXpath(this.pathToPagedElement_);
    }
  }

  renderPagingMode(salvage) {
    // Sometimes we'll retry and use the XPath again or a user-provided selector.
    if (!this.selectionNode_) {
      this.retrySelectPagedElement_();
    }

    this.frame_.setLoading(true);
    this.fetchPagingData_(salvage)
        .then(data => this.renderDataPreview_(data))
        .then(() => this.renderPagingUI_())
        .then(() => {
          if (this.pagingListener_) {
            return this.pagingListener_.tryNextPageNav(this.pathToPager_, this.pagerSelector_);
          }
          return Promise.resolve();
        })
        .then(() => this.handlePagingModeSuccess_())
        .catch(err => this.handlePagingRenderError_(err, 'Unable to render table data.'))
        .finally(() => this.frame_.setLoading(false));
  }

  renderSelectionMode() {
    window.getSelection().removeAllRanges();
    document.addEventListener('selectionchange', this.handleSelectionFn_);

    if (this.userConfig_.requiresPaid && !this.userConfig_.paidPro) {
      return this.renderActivateMessage_();
    }

    if (this.errorMessage_) {
      return this.renderCleanSlateErrorMessage_();
    }

    if (this.selectionNode_ && _tcIsNodeWithinTable(this.selectionNode_)) {
      this.frame_.setLoading(true);
      return this.fetchTableData_()
          .then(data => this.renderDataPreview_(data))
          .then(() => this.renderElementForm_(true))
          .then(() => this.frame_.setLoading(false))
          .catch(err => this.handleSelectionRenderError_(err, 'Unable to render table data.'));
    }

    if (this.selectionNode_) {
      this.frame_.setLoading(true);
      return this.fetchArbData_()
          .then(data => this.renderDataPreview_(data))
          .then(() => this.renderElementForm_(false))
          .then(() => this.frame_.setLoading(false))
          .catch(err => this.handleSelectionRenderError_(err, 'Unable to render table data.'));
    }

    this.frame_.setLoading(false);
    this.renderNoSelectionMessage_();
  }

  handleDynPagerMissing_(err, errorType) {
    if (errorType === "DISCONNECTED") {
      this.handleActionError_(err, "Unable to auto-page.");
    }

    if (this.userConfig_.showDeveloperOptions) {
      this.contentWrapper_
          .querySelector('.btn-update-dyn-pager-selector')
          .classList.remove('tc-hidden');
    }
  }

  handleUpdateDynPagerDomSelector_() {
    const val = window.prompt("Provide a custom selector/xpath for the 'next page' button.");
    if (val && this.autoPager_) {
      this.autoPager_
          .useUserQuerySelector(val)
          .catch(err => this.handleActionError_(err, "Unable to update selector/xpath for 'next page' button."));
    }
  }

  handlePagerMissing_() {
    if (this.userConfig_.showDeveloperOptions) {
      this.contentWrapper_
          .querySelector('.btn-update-pager-selector')
          .classList.remove('tc-hidden');
    }
  }

  handleUpdatePagerDomSelector_() {
    const val = window.prompt("Provide a custom selector/xpath for the 'next page' button.");
    if (val && this.pagingListener_) {
      this.pagingListener_.setTabAndElementWrapper(this.tabId_, this.getElementWrapper_());
      this.pagingListener_
          .useUserQuerySelector(val)
          .catch(err => this.handleActionError_(err, "Unable to update selector/xpath for 'next page' button."));
    }
  }

  renderPagingErrorMessage_(message) {
    const retrySummary = this.pagingRetryTimeout_
        ? `Automatically retrying... (${this.pagingRetryCount_})`
        : "Not automatically retrying";

    this.contentWrapper_.classList.add('_tc-empty');
    this.contentWrapper_.innerHTML = `
      <div class="tc-message tc-error">
        <span>${message}</span>
      </div>
      <div class="help-message">
        <div>Sometimes this is just a timing thing.</div>
        <div class="tc-retry-info tc-hidden" title="Automatic Retries: ${this.pagingRetryCount_}">${retrySummary}</div>
        <div class="paging-error-actions">
          <button class="btn-workshop-default btn-paging-retry">Retry</button>
          <button class="btn-workshop-default tc-hidden btn-salvage-data">Retry &amp; Salvage</button>
          <button class="btn-workshop-default btn-paging-reset">Reset</button>
          <button class="btn-workshop-default tc-hidden btn-paging-selector-apply">🛠</button>
        </div>
      </div>
    `;
    this.contentWrapper_
        .querySelector('.btn-paging-retry')
        .addEventListener('click', this.renderPagingMode.bind(this, false));
    this.contentWrapper_
        .querySelector('.btn-paging-reset')
        .addEventListener('click', () => {
          this.destroy(true);
          this.renderSelectionMode();
        });

    this.bindHoverToTooltipText_('.btn-paging-retry', chrome.i18n.getMessage('pagingRetryActionTooltip'));
    this.bindHoverToTooltipText_('.btn-salvage-data', chrome.i18n.getMessage('pagingRetrySalvageActionTooltip'));
    this.bindHoverToTooltipText_('.btn-paging-reset', chrome.i18n.getMessage('pagingResetActionTooltip'));
    this.bindHoverToTooltipText_('.btn-paging-selector-apply', chrome.i18n.getMessage('pagingPagedElementDomSelectorActionTooltip'));

    const salvageDataButton = this.contentWrapper_.querySelector('.btn-salvage-data');
    salvageDataButton.addEventListener('click', this.renderPagingMode.bind(this, true));

    // Allow users to provide a selector to target the table.
    const providePagingSelectorButton = this.contentWrapper_.querySelector('.btn-paging-selector-apply');
    providePagingSelectorButton.addEventListener('click', () => {
      const val = window.prompt("Provide a custom selector/xpath");
      if (val) {
        this.selectorForPagedElement_ = val;
        this.renderPagingMode(false);
      }
    });

    if (this.userConfig_.showDeveloperOptions) {
      providePagingSelectorButton.classList.remove("tc-hidden");
    }

    const stillRetrying = this.pagingRetryTimeout_ || this.pagingRetryCount_ < _TCAP_CONFIG.numPagingRetries;
    if (!stillRetrying && this.pagingListener_ && this.pagingListener_.hasSubstantialData()) {
      salvageDataButton.classList.remove("tc-hidden");
    }

    if (this.pagingRetryTimeout_ || this.pagingRetryCount_ !== 0) {
      this.contentWrapper_.querySelector('.tc-retry-info').classList.remove('tc-hidden');
    }

    if (this.pagingListener_ && this.pagingListener_.isAutoPaging() && document.visibilityState === "hidden") {
      window.setTimeout(this.renderPagingMode.bind(this, false), _TCAP_CONFIG.autoPageWait);
    }

    this.errorMessage_ = null;
    return Promise.resolve();
  }

  renderActivateMessage_() {
    this.contentWrapper_.classList.add('_tc-locked');
    this.contentWrapper_.innerHTML = `
      <div class="tc-message tc-error">
        <span>Please activate Table Capture to use the extension.</span>
      </div>
      <div class="help-message">
        Once you activate, this workshop will be instrumental in helping you capture div-based, paged and dynamic tables.
      </div>
    `;

    document
        .querySelector('.pro-cta')
        .innerHTML = `<span>Activate <span class="_tc-strong">Table Capture</span></span>`;

    Array
        .from(document.querySelectorAll('.not-tc-pro'))
        .forEach(el => el.classList.remove('tc-hidden'));

    return Promise.resolve();
  }

  renderCleanSlateErrorMessage_() {
    this.contentWrapper_.classList.add('_tc-empty');
    this.contentWrapper_.innerHTML = `
      <div class="tc-message tc-error">
        <span>${this.errorMessage_}</span>
      </div>
      <div class="help-message">
        Highlight any cell text that's a part of your table to try again.
      </div>
    `;
    this.errorMessage_ = null;
    return Promise.resolve();
  }

  renderNoSelectionMessage_() {
    this.contentWrapper_.classList.add('_tc-empty');
    this.contentWrapper_.innerHTML = `
      <div class="tc-message">
        <span>Highlight any cell text that's a part of your table to get started.</span>
      </div>
      <div class="help-message">
        If you're having trouble selecting text, try right-clicking any element that's a part of your table to
        Workshop it.
      </div>
      <div class="help-message">
        If this page has disabled right-clicking, <a class="_tc-clickable clobber-right-click">click here</a> and try again.
      </div>
    `;

    if (window._tcxLogger && _tcxLogger && _tcxLogger.isEnabled() && _tcxLogger.getResponseCount() > 0) {
      const count = _tcxLogger.getResponseCount();

      const searchCallout = document.createElement('div');
      searchCallout.className = 'help-message';
      searchCallout.innerHTML = `You can also <a class="_tc-clickable">search</a> the request data (${count} requests) that often builds dynamic websites.`;
      searchCallout
          .querySelector('a')
          .addEventListener('click', this.handleSearchInit_.bind(this));
      this.contentWrapper_.appendChild(searchCallout);
    }

    this.contentWrapper_
        .querySelector('.clobber-right-click')
        .addEventListener('click', () => {
          _tcExecEmbeddedCode(`document.oncontextmenu = null;`);
          this.frame_.remove();
          this.destroy(true);
        });
  }

  mergeData_(priorData, newData) {
    // If we have data, we may potentially want to drop the headers from the new data.
    try {
      const hasPriorData = priorData && priorData.dataArray && priorData.dataArray.length;
      const hasNewData = newData && newData.dataArray && newData.dataArray.length;
      if (hasPriorData && hasNewData) {
        const firstRow = priorData.dataArray[0];
        const newFirstRow = newData.dataArray[0];
        if (JSON.stringify(firstRow) == JSON.stringify(newFirstRow)) {
          // Remove the first row
          newData.dataArray.shift();
          newData.rows = newData.dataArray.length;
        }
      }
    } catch (err) {
      // No-op.
    }

    return {
      ...newData,
      rows: priorData.rows + newData.rows,
      cols: Math.max(priorData.cols, newData.cols),
      dataArray: [...priorData.dataArray, ...newData.dataArray],
    };
  }

  fetchTableData_() {
    if (!this.selectionNode_) {
      return Promise.reject(new Error('Unable to locate selected element.'))
    }

    let tableElement = this.selectionNode_;
    while (tableElement && tableElement.tagName !== 'TABLE') {
      tableElement = tableElement.parentNode;
    }

    if (!tableElement) {
      return Promise.reject(new Error('Unable to locate selected element.'))
    }

    this.tableWrapper_ = new TableWrapper(
        tableElement, this.pageUrl_, _tcGetWindowName(window), this.userConfig_);
    this.tableWrapper_.inferTableIndex();
    const data = this.tableWrapper_.getAsArrays() || [];

    return Promise.resolve({
      element: tableElement,
      isTable: true,
      rows: data.length,
      cols: _tcSmartColCount(data),
      dataArray: data,
    });
  }

  fetchArbData_() {
    if (this.selectionWrapper_) {
      // No-op. We already have one.
    } else {
      this.selectionWrapper_ = new SelectionWrapper(this.selectionNode_, this.pageUrl_, this.userConfig_);
      this.selectionWrapper_.setTreatAsTable(this.treatAsTable_);
    }

    const data = this.selectionWrapper_.getAsArrays() || [];
    return Promise.resolve({
      element: this.selectionNode_,
      isTable: false,
      rows: data.length,
      cols: _tcSmartColCount(data),
      dataArray: data,
    });
  }

  fetchPagingData_(salvage) {
    if (!this.selectionNode_ && !salvage) {
      if (this.pagingRetryCount_ < _TCAP_CONFIG.numPagingRetries) {
        this.autoRetryPagingDueToError_();
      }
      return Promise.reject(new Error('Unable to locate selected paged element.'))
    }

    const priorData = this.pagingListener_.getData();
    if (_tcIsNodeWithinTable(this.selectionNode_)) {
      return this
          .fetchTableData_()
          .then(data => this.mergeData_(priorData, data));
    }
    return this
        .fetchArbData_()
        .then(data => this.mergeData_(priorData, data));
  }

  renderContentFrame_() {
    const baseExtUrl = chrome.extension.getURL('/');
    const cloudImage = baseExtUrl + 'images/icon.cloud.128.png';

    let frameActions = _TC_SELWORK_FRAME_ACTIONS;
    // Screenshotting doesn't make sense for recipes.
    if (this.recipeWrapper_) {
      frameActions = frameActions.filter(a => !a.className.includes('screenshot'));
    }

    this.contentWrapper_.innerHTML = `
      <div class="tc-col _tc-left">
        <div class="arb-nav tc-hidden">
          <div class="_tc-heading">Before you capture:</div>
          <p class="readable">
            Use the buttons below to find the page element that wraps all the repeating elements of your table or list-like content.
          </p>
          <div class="nav-actions">
            <TCButton class="btn-select-parent">Select parent element</TCButton>
            <TCButton class="btn-select-child">Select child element</TCButton>
          </div>
        </div>
        <div class="_tc-settings">
          <div class="_tc-heading">
            Options
            <span class="inline-action edit-settings">✎</span>
          </div>
          <div class="settings-summary"></div>
          <p class="disclaimer settings-refresh tc-hidden">Refresh the page and relaunch the workshop to reflect any options changes.</p>
        </div>
        <div class="robot-wrapper tc-hidden">
          <div class="_tc-heading">
            Paged &amp; Dynamic Tables
            <span class="inline-action robot-refetch-data">⟳</span>
            <span class="inline-action emoji set-robot-capture-config">🛠</span>
          </div>
        </div>
        <div class="paged-tables-upgrade-required tc-hidden">
          <div class="_tc-heading">Paged &amp; Dynamic Tables</div>
          <label class="_tc-switch _tc-switch-disabled">
            <input type="checkbox" disabled="true" />
            <span class="tc-slider"></span>
          </label>
          <p class="readable">
            <a class="pro-cta loud-cta">Try Table Capture Pro</a> to be able to capture multi-page tables <a href="https://photos.app.goo.gl/EjjKPnNRStfZZj8TA" target="_blank">(demo)</a> and tables
            whose content changes dynamically <a href="https://photos.app.goo.gl/hYLsamqXR8ZQjBvj8" target="_blank">(demo)</a>. 
            <span class="cloud-cta-wrapper support-cloud-only">Also, <a class="cloud-cta loud-cta"> try Table Capture Cloud (Beta)</a> for a bunch of next-level features.</span>
          </p>
        </div>
        <div class="table-paging tc-hidden">
          <div class="_tc-heading">
            Paged tables
            <span class="inline-action refetch-data">⟳</span>
          </div>
          <p class="readable">
            If your table only shows a portion of its content on this page and needs to reload a new page to show more,
            enable paged capture. <a href="https://photos.app.goo.gl/EjjKPnNRStfZZj8TA" target="_blank">(See a demo)</a>
          </p>
          <label class="_tc-switch paged-recording-switch">
            <input type="checkbox" class="paged-recording-checkbox" />
            <span class="tc-slider"></span>
          </label>
          <p class="readable paging-info">
            <strong>Next: Click whatever link or button will go to the next page.</strong> The extension will remember which table
            you're interested in. As long as it can find your table, it'll keep capturing its data as you go through pages.
          </p>
          <div class="sub-actions">
            <TCToggButton class="_tc-toggle-btn btn-auto-page disable-not-pro">Toggle auto-paging</TCToggButton>
            <TCButton class="btn-workshop-default tc-hidden btn-update-pager-selector">🛠</TCButton>
          </div>
          <p class="readable paging-data-disclaimer">
            You have been capturing paged content. Turning paging off now will clear your previously captured data.
          </p>
        </div>
        <div class="table-recording tc-hidden">
          <div class="_tc-heading">
            Dynamic tables
            <span class="inline-action emoji set-dynamic-capture-config">🛠</span>
          </div>
          <p class="readable">
            Some tables grow and shrink as you scroll or allow you to load new data without the entire site reloading. Turn on dynamic table capture to detect and capture
            all the rows that are ever displayed. <a href="https://photos.app.goo.gl/hYLsamqXR8ZQjBvj8" target="_blank">(See a demo)</a>
          </p>
          <p class="readable arb-nav-only tc-hidden">
            Turn on dynamic table capture only after you've selected the correct page element that
            wraps all the repeating elements of your table or list-like content.
          </p>
          <label class="_tc-switch recording-switch">
            <input type="checkbox" class="recording-checkbox" />
            <span class="tc-slider"></span>
          </label>
          <div class="sub-actions">
            <TCToggButton class="_tc-toggle-btn btn-auto-scroll disable-not-pro">Toggle auto-scrolling</TCToggButton>
            <TCToggButton class="_tc-toggle-btn btn-auto-dynpage disable-not-pro">Toggle auto-paging</TCToggButton>
            <TCButton class="btn-workshop-default tc-hidden btn-update-dyn-pager-selector">🛠</TCButton>
            <TCToggButton class="_tc-toggle-btn btn-sync-to-sheets disable-not-pro support-cloud-only">
              <img src="${cloudImage}" />
              <span class="_tc-button-text">Google Sheets Sync</span>
            </TCToggButton>
          </div>
          <p class="readable dyn-paging-info">
            <strong>Next: Click whatever link or button will go to the next page.</strong> The extension will then try to click that button
            continuously until you turn off auto-paging.
          </p>
        </div>
        <div class="_tc-json-responses tc-hidden">
          <div class="_tc-heading">Data Requests Containing: <span class="needle"></span></div>
          <p class="readable">Select a request below to view its data.</p>
          <div class="_tc-response-list"></div>
        </div>
        <div class="_tc-recipe-controls tc-hidden">
          <div class="_tc-heading">Recipe Controls</div>
          <div class="sub-actions">
            <TCButton class="btn-clip-recipe">Clip Recipe</TCButton>
            <TCButton class="btn-recipe-clip-data">View Clip Data</TCButton>
          </div>
          <p class="readable">
            When you clip a recipe, Table Capture adds the data to one aggregate collection of data per recipe
            that you can later export as you so choose.
          </p>
          <p class="readable _tc-text-well">
            <strong>FYI.</strong> Recipe clipping is a new feature. We welcome your feedback!
          </p>
        </div>
      </div>
      <div class="tc-col _tc-right">
        <div class="_tc-heading">
          Preview Data · <span class="_tc-size"></span>
          <span class="_tc-data-action _tc-clip tc-hidden">Clip</span>
          <span class="_tc-data-action _tc-columnify tc-hidden"></span>
        </div>
        <table class="tc-ignore"><tbody></tbody></table>
        <div class="_tc-actions"></div>
      </div>
    `;

    const actionWrapper = this.contentWrapper_.querySelector('._tc-right ._tc-actions');
    frameActions.forEach(({className, src, frame, tooltip}) => {
      const btn = document.createElement('button');
      btn.className = `${className} ${!frame && "btn-no-frame"}`;
      btn.innerHTML = `<img src="${baseExtUrl + src}" />`;
      actionWrapper.appendChild(btn);
      tooltip
          && this.bindHoverToTooltipText_(`.${className}`, tooltip);
    });

    this.bindHoverToTooltipText_('.btn-auto-scroll', chrome.i18n.getMessage('autoScrollActionTooltip'));
    this.bindHoverToTooltipText_('.btn-auto-dynpage', chrome.i18n.getMessage('autoPageActionTooltip'));
    this.bindHoverToTooltipText_('.btn-auto-page', chrome.i18n.getMessage('autoPageActionTooltip'));
    this.bindHoverToTooltipText_('.btn-sync-to-sheets', chrome.i18n.getMessage('sheetSyncActionTooltip'));
    this.bindHoverToTooltipText_('._tc-columnify', chrome.i18n.getMessage('columnifyActionTooltip'));
    this.bindHoverToTooltipText_('._tc-clip', chrome.i18n.getMessage('clipActionTooltip'));
    this.bindHoverToTooltipText_('.inline-action.edit-settings', chrome.i18n.getMessage('editSettingsTooltip'));
    this.bindHoverToTooltipText_('.inline-action.refetch-data', chrome.i18n.getMessage('refetchDataTooltip'));
    this.bindHoverToTooltipText_('.inline-action.set-dynamic-capture-config', chrome.i18n.getMessage('dynamicCaptureConfigTooltip'));
    this.bindHoverToTooltipText_('.recording-switch', chrome.i18n.getMessage('dynamicToggleTooltip'));
    this.bindHoverToTooltipText_('.paged-tables-upgrade-required ._tc-switch-disabled', chrome.i18n.getMessage('upgradeForFeature'));
    this.bindHoverToTooltipText_('.btn-update-pager-selector', chrome.i18n.getMessage('updatePagerDomSelectorActionTooltip'));
    this.bindHoverToTooltipText_('.btn-update-dyn-pager-selector', chrome.i18n.getMessage('updatePagerDomSelectorActionTooltip'));

    this.contentWrapper_
        .querySelector('.recording-checkbox')
        .addEventListener('change', this.handleRecordingToggle_.bind(this));
    this.contentWrapper_
        .querySelector('.paged-recording-checkbox')
        .addEventListener('change', this.handlePagingToggle_.bind(this));

    // Recipe actions
    this.contentWrapper_
        .querySelector('.btn-clip-recipe')
        .addEventListener('click', this.clipRecipeData_.bind(this));
    this.contentWrapper_
        .querySelector('.btn-recipe-clip-data')
        .addEventListener('click', this.viewRecipeClipData_.bind(this));

    const actionDefs = {
      "btn-edit": {
        fn: this.handleEditAction_.bind(this),
        disabled: false,
      },
      "btn-copy": {
        fn: this.handleCopyAction_.bind(this),
        disabled: false,
      },
      "btn-sheets": {
        fn: this.handleSheetsAction_.bind(this),
        disabled: false,
      },
      "btn-csv": {
        fn: this.handleCsvAction_.bind(this),
        disabled: !this.userConfig_.paidPro,
      },
      "btn-excel": {
        fn: this.handleExcelAction_.bind(this),
        disabled: !this.userConfig_.paidPro,
      },
      "btn-screenshot": {
        fn: this.handleScreenshotAction_.bind(this),
        disabled: !this.userConfig_.paidPro,
      },
      "btn-o365": {
        fn: this.handleOffice365Action_.bind(this),
        disabled: !this.userConfig_.paidPro,
      },
      "btn-markdown": {
        fn: this.handleMarkdownAction_.bind(this),
        disabled: !this.userConfig_.paidPro,
      },
      "btn-publish": {
        fn: this.handlePublishAction_.bind(this),
        disabled: !this.userConfig_.paidPro,
      },
      "btn-update-pager-selector": {
        fn: this.handleUpdatePagerDomSelector_.bind(this),
        disabled: !this.userConfig_.showDeveloperOptions,
      },
      "btn-update-dyn-pager-selector": {
        fn: this.handleUpdateDynPagerDomSelector_.bind(this),
        disabled: !this.userConfig_.showDeveloperOptions,
      },
    };

    Object
        .keys(actionDefs)
        .forEach(key => {
          const def = actionDefs[key];
          const actionButton = this.contentWrapper_.querySelector(`.${key}`);
          // These actions might be filtered out.
          if (!actionButton) {
            return;
          }
          actionButton.addEventListener('click', () => def.fn(key, def));
          if (def.disabled) {
            actionButton.classList.add('_tc-disabled');
          }
        });

    this.contentWrapper_
        .querySelector('.btn-select-child')
        .addEventListener('click', this.handleChildSelect_.bind(this));
    this.contentWrapper_
        .querySelector('.btn-select-parent')
        .addEventListener('click', this.handleParentSelect_.bind(this));
    this.contentWrapper_
        .querySelector('._tc-columnify')
        .addEventListener('click', this.toggleColumnification_.bind(this));
    this.contentWrapper_
        .querySelector('._tc-clip')
        .addEventListener('click', this.handleClipData_.bind(this));
    this.contentWrapper_
        .querySelector('.btn-auto-scroll')
        .addEventListener('click', this.toggleTableScroll_.bind(this));
    this.contentWrapper_
        .querySelector('.btn-auto-dynpage')
        .addEventListener('click', this.toggleTableDynPage_.bind(this));
    this.contentWrapper_
        .querySelector('.btn-auto-page')
        .addEventListener('click', this.toggleTableAutoPage_.bind(this));

    // Sheets sync
    this.contentWrapper_
        .querySelector('.btn-sync-to-sheets')
        .addEventListener('click', this.toggleSheetsSync_.bind(this));

    this.contentWrapper_
        .querySelector('.inline-action.edit-settings')
        .addEventListener('click', this.handleSettingsEdit_.bind(this));
    this.contentWrapper_
        .querySelector('.inline-action.refetch-data')
        .addEventListener('click', this.handleDataRefetch_.bind(this));
    this.contentWrapper_
        .querySelector('.inline-action.set-dynamic-capture-config')
        .addEventListener('click', this.handleSetDynamicTableConfig_.bind(this));

    if (this.userConfig_.paidPro) {
      Array
          .from(this.contentWrapper_.querySelectorAll('.pro-only'))
          .forEach(el => el.classList.remove('tc-hidden'));
    } else {
      Array
          .from(this.contentWrapper_.querySelectorAll('.disable-not-pro'))
          .forEach(el => el.classList.add('_tc-disabled'));
      Array
          .from(document.querySelectorAll('.not-tc-pro'))
          .forEach(el => el.classList.remove('tc-hidden'));
    }

    // Cloud gating
    if (!_TCAP_CONFIG.supportsCloud) {
      Array.from(this.contentWrapper_.querySelectorAll('.support-cloud-only'))
          .forEach(el => el.classList.add('tc-hidden'));
    }

    // Paging gating. 2021.2.10.
    const allowPaging = !this.payToPage_ || this.userConfig_.paidPro;
    this.contentWrapper_.querySelector('.table-recording.tc-hidden').classList.toggle('tc-hidden', !allowPaging);
    this.contentWrapper_.querySelector('.table-paging.tc-hidden').classList.toggle('tc-hidden', !allowPaging);
    this.contentWrapper_.querySelector('.paged-tables-upgrade-required.tc-hidden').classList.toggle('tc-hidden', allowPaging);
    this.contentWrapper_
        .querySelector('.paged-tables-upgrade-required .pro-cta')
        .addEventListener('click', () => {
          window.open(chrome.extension.getURL("/upgrade.html?ref=bwokeshop-paged"));
        });
    this.contentWrapper_
        .querySelector('.paged-tables-upgrade-required .cloud-cta')
        .addEventListener('click', () => {
          window.open(chrome.extension.getURL("/cloud.html?ref=bwokeshop-paged"));
        });

    this.contentWrapper_.querySelector('._tc-columnify').innerText = (this.treatAsTable_)
        ? 'Break columns'
        : 'Revert';

    return Promise.resolve();
  }

  updateContentFrame_(rows, cols) {
    let message = `Rows: ${rows}, Columns: ${cols}`;
    if (this.pagingListener_.isPaging()) {
      message += `, Pages: ${this.getPageIndex_()}`;
    }
    this.contentWrapper_.querySelector('._tc-right ._tc-heading ._tc-size').innerText = message;
  }

  getPageIndex_() {
    if (this.pagingListener_ && this.pagingListener_.isPaging()) {
      return this.pagingListener_.getCount() + 1;
    }
    return 1;
  }

  renderDataPreview_(data) {
    const {rows, cols, dataArray} = data;

    this.contentWrapper_.classList.remove('_tc-empty');
    this.getElementWrapper_().highlight();

    if (!dataArray || dataArray.length === 0) {
      return Promise.reject(new Error('No data present.'));
    }

    this.pagingListener_.setData(data);
    return this
        .renderContentFrame_()
        .then(() => {
          this.updateContentFrame_(rows, cols);
          return this.renderTableDataPreview_({rows, cols, dataArray});
        });
  }

  renderTableDataPreview_({dataArray}) {
    // Save a copy of the data.
    this.latestDataArray_ = JSON.parse(JSON.stringify(dataArray));

    const maxRowsToShow = (this.isFrameFull_)
        ? _TCAP_CONFIG.selectionDataFullMaxRows
        : _TCAP_CONFIG.selectionDataMaxRows;
    const maxColsToShow = (this.isFrameFull_)
        ? _TCAP_CONFIG.selectionDataFullMaxCols
        : _TCAP_CONFIG.selectionDataMaxCols;

    // NOTE(gmike, 9-15-2020): Changed this because of Timothy. This might need to always be true.
    const hasMulitpleColumns = dataArray.some(row => row.length > 3) && !this.userConfig_.alwaysAllowColumnify;

    const headers = dataArray[0];
    const dataRows = dataArray.slice(1, maxRowsToShow);
    const lastRow = dataArray[dataArray.length - 1];
    const unrenderedRows = dataArray.length - maxRowsToShow;

    let maxCols = -1;
    dataArray.forEach(el => {
      if (el && el.length > maxCols) {
        maxCols = el.length;
      }
    });
    const renderedCols = Math.min(maxColsToShow + 1, maxCols);

    const table = this.contentWrapper_.querySelector('._tc-right table tbody');
    table.innerHTML = '';

    this.renderTableRows_(table, [headers], maxColsToShow, renderedCols, true);
    this.renderTableRows_(table, dataRows, maxColsToShow, renderedCols, false);

    if (unrenderedRows > 0) {
      // For 2 or more unrendered, render a ... row.
      if (unrenderedRows > 1) {
        const span = document.createElement('tr');
        span.innerHTML = `<td class="_tc-ellipsis-cell" colspan="${renderedCols}"><div class="_tc-cell-inner">...</div></td>`
        table.appendChild(span);
      }
      // Render last row
      this.renderTableRows_(table, [lastRow], maxColsToShow, renderedCols);
    }

    this.updateColumnifyButton_(hasMulitpleColumns);
    return Promise.resolve();
  }

  renderTableRows_(tableBody, rows, displayCols, renderedCols, identity) {
    if (!rows || !rows.length) {
      return;
    }

    rows.forEach(rowData => {
      const numCells = rowData.length;
      const tr = document.createElement('tr');
      rowData
          .splice(0, displayCols)
          .forEach((cell, i) => {
            const cellInner = document.createElement('div');
            cellInner.className = "_tc-cell-inner";
            cellInner.innerText = (cell === undefined || cell === null)
                ? ''
                : cell;

            const td = document.createElement('td');
            td.appendChild(cellInner);
            tr.appendChild(td);
            if (identity) {
              td.style.pointerEvents = "auto";
              td.addEventListener('click', (e) => {
                e.preventDefault();
                if (e.metaKey) {
                  const on = this.toggleIdentityColumn_(i);
                  td.classList.toggle('_tc-identity-cell', on);
                }
                return false;
              });
              td.classList.toggle('_tc-identity-cell', this.identityColumns_.hasOwnProperty(String(i)));
            }
          });

      if (numCells > displayCols) {
        const td = document.createElement('td');
        td.innerHTML = `<div class="_tc-cell-inner">...</div>`;
        tr.appendChild(td);
      } else if (numCells < renderedCols) {
        // Render placeholder cells.
        let i = numCells;
        while (i != renderedCols) {
          tr.appendChild(document.createElement('td'));
          i++;
        }
      }

      tableBody.appendChild(tr);
    });
  }

  renderPagingUI_() {
    this.renderSettings_();
    this.updateArbNavElements_(true, false);
    this.updateTableRecordingVisibility_(true);

    this.contentWrapper_.classList.add('has-paging-data');
    this.contentWrapper_.classList.add('paging-on');
    this.contentWrapper_.querySelector('.paged-recording-checkbox').checked = true;

    if (this.pagingListener_ && this.pagingListener_.isAutoPaging()) {
      const button = this.contentWrapper_.querySelector('.btn-auto-page');
      button.classList.add('toggled-on');
    }

    return Promise.resolve();
  }

  renderElementForm_(isTable) {
    this.renderSettings_();
    this.updateArbNavElements_(isTable, false);
  }

  updateTableRecordingVisibility_(isHidden) {
    this.contentWrapper_.querySelector('.table-recording').classList.toggle('tc-hidden', isHidden);
  }

  updateTablePagingVisibility_(isHidden) {
    this.contentWrapper_.querySelector('.table-paging').classList.toggle('tc-hidden', isHidden);
  }

  updateArbNavElements_(arbIsHidden, arbBeingUsed) {
    if (arbIsHidden && arbBeingUsed) {
      this.contentWrapper_.querySelector('.arb-nav').classList.toggle('ghosted', arbIsHidden);
    } else {
      this.contentWrapper_.querySelector('.arb-nav').classList.toggle('tc-hidden', arbIsHidden);
      this.contentWrapper_.querySelector('.arb-nav').classList.toggle('ghosted', false);
    }

    Array
        .from(this.contentWrapper_.querySelectorAll('.arb-nav-only'))
        .forEach(el => el.classList.toggle('tc-hidden', arbIsHidden && !arbBeingUsed));
  }

  renderSettings_() {
    const wrapper = this.contentWrapper_.querySelector('.settings-summary');

    const renderVal = (el, val) => {
      const tag = document.createElement('span');
      tag.innerText = val;
      tag.className = '_tc-tag';
      el.appendChild(tag);
    }

    if (this.userConfig_.ignoreImages) {
      renderVal(wrapper, 'Ignore images');
    } else if (this.userConfig_.extractImageSrc) {
      renderVal(wrapper, 'Extract image + icon attributes');
    } else {
      renderVal(wrapper, 'Ignore image + icon attributes');
    }

    this.userConfig_.getLinkUrls && renderVal(wrapper, `Extract web addresses (URLs)`);
    this.userConfig_.deleteEmptyRows && renderVal(wrapper, `Delete empty rows`);
    this.userConfig_.moneyAsNumber && renderVal(wrapper, `Convert money values`);
    this.userConfig_.ignoreHiddenPageElements && renderVal(wrapper, `Ignore hidden elements`);
  }

  renderResponseViewer_(needle, responses, selectedResponseIndex) {
    const wrapper = this.contentWrapper_.querySelector('._tc-json-responses');
    wrapper.querySelector('.needle').innerText = needle;
    wrapper.classList.remove('tc-hidden');

    const respList = wrapper.querySelector('._tc-response-list');
    responses.forEach((resp, i) => {
      const el = document.createElement('div');
      if (i === selectedResponseIndex) {
        el.classList.add('_tc-active-resp');
      }
      el.innerHTML = `<span>${resp.url}</span>`;
      el.querySelector('span').addEventListener('click', () => {
        this.renderJsonMode_(needle, responses, i);
      });
      respList.appendChild(el);
    });
  }

  /// TOOLTIPS

  bindHoverToTooltipText_(selector, text) {
    this.contentWrapper_
        .querySelector(selector)
        .addEventListener('mouseenter', this.displayTooltipText_.bind(this, text));
    this.contentWrapper_
        .querySelector(selector)
        .addEventListener('mouseleave', this.clearTooltipText_.bind(this));
  }

   clearTooltipText_() {
    if (this.tooltipTimeout_) {
      window.clearTimeout(this.tooltipTimeout_);
      this.tooltipTimeout_ = null;
    }

    if (this.clearTooltipTimeout_) {
      window.clearTimeout(this.clearTooltipTimeout_);
    }

    this.clearTooltipTimeout_ = window.setTimeout(() => {
      this.frame_.setTooltip('');
      this.clearTooltipTimeout_ = null;
    }, 100);
  }

  displayTooltipText_(text) {
    if (this.tooltipTimeout_) {
      window.clearTimeout(this.tooltipTimeout_);
    }

    if (this.clearTooltipTimeout_) {
      window.clearTimeout(this.clearTooltipTimeout_);
      this.clearTooltipTimeout_ = null;
    }

    this.tooltipTimeout_ = window.setTimeout(() => {
      this.frame_.setTooltip(text);
      this.tooltipTimeout_ = null;
    }, 100);
  }

  ////

  copySnoop_(outputFormat) {
    let tableString = TableUtil.arrayOfArraysToString(
        this.snoop_.getValues(), _TCAP_COPY_CONST.rowSeparator, _TCAP_COPY_CONST.colSeparator);
    tableString = TableUtil.postProcessFinalString(tableString, outputFormat, _TCAP_COPY_CONST);

    const params = {
      action : MessageAction.COPY_TABLE_STRING,
      tableString,
    };

    return new BrowserEnv().sendMessage(params);
  }

  handleClipData_() {
    const clipLink = this.contentWrapper_.querySelector('._tc-clip');
    if (clipLink.innerHTML.includes('View')) {
      _tcLogEvent('SWorkshop.handleClipData_ - view');
      return window.open(chrome.extension.getURL("/clips.html"));
    }

    _tcLogEvent('SWorkshop.handleClipData_');
    this.frame_.setLoading(true);
    return this
        .getDataArray_(OutputFormat.GOOG)
        .then(data => {
          const dataClipper = new DataClipper(this.userConfig_);
          return dataClipper.clipData(data);
        })
        .then(() => {
          clipLink.innerText = "View clips";
          this.frame_.renderSuccess('Data clipped.');
        })
        .catch(err => this.handleActionError_(err, 'Unable to clip table data.'))
        .finally(this.frame_.setLoading(false));
  }

  handleCopyAction_() {
    _tcLogEvent('SWorkshop.handleCopyAction_');

    this.frame_.setLoading(true);
    return this
        .copyToOutputFormat_(OutputFormat.CLIPBOARD)
        .then(() => this.handleCopySuccess_())
        .catch(err => this.handleActionError_(err, 'Unable to capture table data.'))
        .finally(this.frame_.setLoading(false));
  }

  handlePublishAction_(key, {disabled}) {
    const disabledDescriptor = (disabled) ? 'Disabled' : 'Enabled';
    _tcLogEvent(`SWorkshop.handlePublishAction_(${disabledDescriptor})`);

    if (disabled) {
      return this.handleDisabledAction_(key);
    }

    this.frame_.setLoading(true);
    return this
        .getPublishableMetadata_()
        .then(publicTableDef => this.savePublicTable_(publicTableDef))
        .then(savedTable => window.open(savedTable.shareUrl))
        .catch(err => this.handleActionError_(err, 'Unable to publish table.'))
        .finally(() => this.frame_.setLoading(false));
  }

  handleMarkdownAction_(key, {disabled}) {
    const disabledDescriptor = (disabled) ? 'Disabled' : 'Enabled';
    _tcLogEvent(`SWorkshop.handleMarkdownAction_(${disabledDescriptor})`);

    if (disabled) {
      return this.handleDisabledAction_(key);
    }

    this.frame_.setLoading(true);
    return this
        .copyToOutputFormat_(OutputFormat.MARKDOWN)
        .then(() => this.handleCopySuccess_())
        .catch(err => this.handleActionError_(err, 'Unable to capture table data.'))
        .finally(() => this.frame_.setLoading(false));
  }

  handleEditAction_(key, {disabled}) {
    _tcLogEvent('SWorkshop.handleEditAction_');

    this.frame_.setLoading(true);
    return this
        .getPublishableMetadata_()
        .then(publicTableDef => this.operateOnPublicTable_(publicTableDef))
        .catch(err => this.handleActionError_(err, 'Unable to edit table.'))
        .finally(() => this.frame_.setLoading(false));
  }

  handleOffice365Action_(key, {disabled}) {
    const disabledDescriptor = (disabled) ? 'Disabled' : 'Enabled';
    _tcLogEvent(`SWorkshop.handleOffice365Action_(${disabledDescriptor})`);
    return this.performTabOpenBasedExport_(key, disabled, _TCAP_CONFIG.office365Link, OutputFormat.OFFICE365);
  }

  launchBetaModal_() {
    new TCBetaModal(this.frame_, this.userConfig_, {
      saveAsRecipe: () => {
        const elWrapper = this.getElementWrapper_();
        if (elWrapper) {
          const recipeDefinition = elWrapper.getRecipeDefinition();
          if (recipeDefinition) {
            const blob = btoa(JSON.stringify(recipeDefinition));
            window.open(chrome.extension.getURL(`/recipes.html?action=new&def=${blob}`));
          } else {
            _tcPageToast("Unable to export a recipe definition.", "error");
          }
        } else {
          _tcPageToast("No Table Selected", "error");
        }
        this.frame_.hideModal();
      },
    });
  }

  launchSheetsModal_() {
    const instanceId = _tcRandString("instance_");
    new TCGoogleSheetsModal(this.frame_, this.sheetsSyncBridge_, this.userConfig_, {
      newSheet: (_, advancedOptions) => {
        this.getDataArray_(OutputFormat.GOOG)
            .then(data => {
              return this
                  .sheetsSyncBridge_.createSheet(instanceId, false, advancedOptions)
                  .then(({sheet}) => this.sheetsSyncBridge_.writeToSheet(instanceId, sheet.id, data, true, advancedOptions));
            })
            .then(() => this.frame_.hideModal())
            .catch(err => this.handleModalError_(err, 'Unable to write to new Google Sheet.'));
      },
      useSheet: (sheetId, advancedOptions) => {
        if (!sheetId) {
          return this.handleModalError_(new Error("Please select a sheet"), "No sheet was selected.");
        }

        this.getDataArray_(OutputFormat.GOOG)
            .then(data => this.sheetsSyncBridge_.writeToSheet(instanceId, sheetId, data, true, advancedOptions))
            .then(() => this.frame_.hideModal())
            .catch(err => this.handleModalError_(err, 'Unable to write to Google Sheet.'));
      },
    });
  }

  handleSheetsAction_(key, {disabled}) {
    _tcLogEvent('SWorkshop.handleSheetsAction_');

    if (this.userConfig_.enableGDriveWrite) {
      return this.launchSheetsModal_();
    }

    return this.performTabOpenBasedExport_(key, disabled, _TCAP_CONFIG.newSheetsUrl, OutputFormat.GOOG);
  }

  performTabOpenBasedExport_(key, disabled, url, outputFormat) {
    if (disabled) {
      return this.handleDisabledAction_(key);
    }

    const params = {
      url,
      outputFormat,
      enablePastePrompt: this.userConfig_.enablePastePrompt,
    };

    this.frame_.setLoading(true);
    return this
        .copyToOutputFormat_(outputFormat)
        .then(() => new BrowserEnv().sendMessage(params))
        .then(() => {
          this.logWorkshopActivity_(MessageAction.COPY, outputFormat);
        })
        .catch(err => this.handleActionError_(err, 'Unable to capture table data.'))
        .finally(() => this.frame_.setLoading(false));
  }

  logWorkshopActivity_(messageAction, outputFormat) {
    this.getPublishableMetadata_(outputFormat)
        .then(publicTableDef => {
          const tcAction = {messageAction, outputFormat};
          _tcLogWorkshopAction(tcAction, this.userConfig_, publicTableDef);
        })
        .catch(err => _tcContentSwallowError(err, 'SelectionWorkshop.js::logWorkshopActivity_()'));
  }

  getPublishableMetadata_(outputFormat=OutputFormat.CLIPBOARD) {
    const elWrapper = this.getElementWrapper_();

    const metadata = {
      title: document.title,
      pageTitle: document.title,
      sourceUrl: window.location.href,
      pages: this.getPageIndex_(),
      paged: false,
      dynamic: false,
      treatAsTable: this.treatAsTable_,
    };

    if (this.pagingListener_.isPaging()) {
      const data = this.pagingListener_.getData();
      return Promise.resolve({
        ...metadata,
        paged: true,
        tableDataArray: data.dataArray,
        pagingDef: {
          pathToPager: this.pathToPager_,
          pagerSelector: this.pagerSelector_,
          pathToElement: this.pathToPagedElement_,
          treatAsTable: this.treatAsTable_,
        },
      });
    }

    if (this.snoop_) {
      return Promise.resolve({
        ...metadata,
        dynamic: true,
        tableDataArray: this.snoop_.getValues(),
      });
    }

    if (elWrapper) {
      return Promise.resolve({
        ...metadata,
        tableDef: elWrapper.toJSON(),
        tableDataArray: elWrapper.getAsArrays(),
      });
    }

    return Promise.reject(`Fall-through in get publishable metadata (${outputFormat})`);
  }

  operateOnPublicTable_(publicTable) {
    const params = {
      action: MessageAction.EDIT_TABLE,
      publicTable,
    };
    return new BrowserEnv().sendMessage(params);
  }

  savePublicTable_(publicTable) {
    const params = {
      action: MessageAction.PUBLISH_TABLE,
      publicTable,
    };
    return new BrowserEnv().sendMessage(params);
  }

  getDataArray_(outputFormat) {
    if (this.pagingListener_.isPaging()) {
      return Promise.resolve(this.pagingListener_.getDataArray());
    }

    if (this.snoop_) {
      // TODO(gmike): This isn't post-processing.
      return Promise.resolve(this.snoop_.getValues());
    }

    const elWrapper = this.getElementWrapper_();
    if (elWrapper) {
      return Promise.resolve(elWrapper.getAsArrays());
    }

    return Promise.reject(`Fall-through in get data array in output format (${outputFormat})`);
  }

  copyToOutputFormat_(outputFormat) {
    if (this.pagingListener_.isPaging()) {
      this.logWorkshopActivity_(MessageAction.COPY, outputFormat);
      return this.pagingListener_.copy(outputFormat);
    }

    if (this.snoop_) {
      this.logWorkshopActivity_(MessageAction.COPY, outputFormat);
      return this.copySnoop_(outputFormat);
    }

    const elWrapper = this.getElementWrapper_();
    if (elWrapper) {
      // The element wrapper will handle activity logging.
      return elWrapper.copy(outputFormat);
    }

    return Promise.reject(`Fall-through in copy to output format (${outputFormat})`);
  }

  handleCsvAction_(key, {disabled}) {
    const disabledDescriptor = (disabled) ? 'Disabled' : 'Enabled';
    _tcLogEvent(`SWorkshop.handleCsvAction_(${key}, ${disabledDescriptor})`);

    if (disabled) {
      return this.handleDisabledAction_(key);
    }

    if (this.latestDataArray_) {
      const filename = this.getDownloadFilename_();
      return ExcelUtil
          .exportArrayOfArraysToCSVP(this.latestDataArray_, 'Sheet', filename, this.userConfig_.csvDelimiter)
          .then(() => {
            this.logWorkshopActivity_(MessageAction.CSV, OutputFormat.CSV);
          })
          .catch(err => this.handleActionError_(err, 'Unable to download table as CSV file.'));
    }

    if (this.tableWrapper_ && this.isOrHasEverRecorded_()) {
      this.handleActionError_(null, `Dynamic tables can't be downloaded as a CSV file.`);
    } else if (this.tableWrapper_) {
      this.tableWrapper_
          .csv()
          .catch(err => this.handleActionError_(err, 'Unable to download table as a CSV file.'));
    } else {
      this.displayTooltipText_('Downloading this element as a CSV file is currently not supported.');
    }
  }

  handleExcelAction_(key, {disabled}) {
    const disabledDescriptor = (disabled) ? 'Disabled' : 'Enabled';
    _tcLogEvent(`SWorkshop.handleExcelAction_(${key}, ${disabledDescriptor})`);

    if (disabled) {
      return this.handleDisabledAction_(key);
    }

    if (this.latestDataArray_) {
      const sheetname = 'Sheet 1 via Table Capture';
      const filename = this.getDownloadFilename_();
      return ExcelUtil
          .exportArrayOfArraysToExcelP(this.latestDataArray_, sheetname, filename)
          .then(() => {
            this.logWorkshopActivity_(MessageAction.EXCEL, OutputFormat.EXCEL);
          })
          .catch(err => this.handleActionError_(err, 'Unable to download table as an Excel spreadsheet.'));
    }

    if (this.tableWrapper_ && this.isOrHasEverRecorded_()) {
      this.handleActionError_(null, `Dynamic tables can't be downloaded directly to Excel.`);
    } else if (this.tableWrapper_) {
      this.tableWrapper_
          .excel()
          .catch(err => this.handleActionError_(err, 'Unable to download table as an Excel spreadsheet.'));
    } else {
      this.displayTooltipText_('Downloading this element as an Excel file is currently not supported.');
    }
  }

  handleScreenshotAction_(key, {disabled}) {
    const disabledDescriptor = (disabled) ? 'Disabled' : 'Enabled';
    _tcLogEvent(`SWorkshop.handleScreenshotAction_(${key}, ${disabledDescriptor})`);

    if (disabled) {
      return this.handleDisabledAction_(key);
    }

    const elWrapper = this.getElementWrapper_();
    if (elWrapper) {
      this.frame_.setLoading(true);
      elWrapper
          .screenshot()
          .then(() => {
            this.frame_.renderSuccess('Table image copied to clipboard');
          })
          .catch(err => this.handleActionError_(err, 'Unable to screenshot element.'))
          .finally(() => this.frame_.setLoading(false));
    }
  }

  handleDisabledAction_(key) {
    const isPro = (this.userConfig_.paidPro) ? 'Pro' : 'Not-Pro';
    _tcLogEvent(`SWorkshop.handleDisabled(${key}, ${isPro})`);

    if (this.userConfig_.paidPro) {
      this.displayTooltipText_('This operation is not supported on this table.');
    } else {
      this.displayTooltipText_(chrome.i18n.getMessage('upgradeForFeature'));
      this.frame_.upgradeJingle();
    }
  }

  handleCloudDisabledAction_(key, message) {
    const isCloud = (this.userConfig_.paidCloud) ? 'Cloud' : 'Not-Cloud';
    _tcLogEvent(`SWorkshop.handleDisabled(${key}, ${isCloud})`);

    if (this.userConfig_.paidCloud) {
      this.displayTooltipText_('This operation is not supported on this table.');
    } else {
      new TCCloudUpdateModal(this.frame_, message);
    }
  }

  handleSettingsEdit_() {
    _tcLogEvent('SWorkshop.handleSettingsEdit_');

    window.open(chrome.extension.getURL("/options.html"));
    this.contentWrapper_.querySelector('._tc-settings .disclaimer').classList.remove('tc-hidden');
  }

  handleDataRefetch_() {
    this.pagingListener_.popData();
    this.renderPagingMode(false);
  }

  handleSetDynamicTableConfig_() {
    const firstUsefulRow = _tcGetRepresentativeRow(this.latestDataArray_);
    const values = {
      firstRow: firstUsefulRow,
      identityColumns: this.identityColumns_,
    };
    new TCDynamicOptionsModal(this.frame_, this.userConfig_, values, {
      onSave: ({identityColumns}) => {
        this.identityColumns_ = identityColumns;
      }
    });
  }

  handleCopySuccess_() {
    this.frame_.renderSuccess('Table copied to clipboard');
  }

  handleSelectionModeClear_() {
    this.destroy(true);
    this.renderSelectionMode();
  }

  handleRemove_() {
    this.destroy(true);
  }

  handleFullFrameToggleRequest_(isFrameFull) {
    this.isFrameFull_ = isFrameFull;
    if (this.latestDataArray_) {
      this.renderTableDataPreview_({dataArray: this.latestDataArray_});
    }
  }

  handleFrameExpandRequest_() {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.body
          .requestFullscreen()
          .catch(err => {
            if (_tcIsInIframe()) {
              alert(`We were unable to maximize this frame, but we'll try opening it in a new tab. Try again in the new tab!`);
              window.open(window.location.href);
            } else {
              alert(err);
            }
          });
    }
  }

  handleSelectionChange_() {
    if (window.getSelection().toString() == "") {
      return null;
    }

    const newNode = _tcGetSelectedNodeFromSelection(this.windowFrame_);
    if (newNode) {
      if (isNodeWorkshopChild(newNode)) {
        return;
      }

      if (this.selectionNode_ == null) {
        this.selectionNode_ = newNode;
        this.renderSelectionMode();

        if (this.frame_.isMinimized()) {
          this.frame_.maximize();
        }
      }
    }
  }

  handleChildSelect_() {
    if (!this.selectionWrapper_) {
      return this.handleActionError_(new Error('Selection not present'), `There is currently no table selection.`);
    }

    this.frame_.setLoading(true);
    window.setTimeout(() => {
      this.setTreatAsTable_(true);

      this.selectionWrapper_.selectPrevious();
      this.selectionNode_ = this.selectionWrapper_.getDomElement();
      this.renderSelectionMode();
    }, 50);
  }

  handleParentSelect_() {
    if (!this.selectionWrapper_) {
      return this.handleActionError_(new Error('Selection not present'), `There is currently no table selection.`);
    }

    this.frame_.setLoading(true);
    window.setTimeout(() => {
      this.setTreatAsTable_(true);

      this.selectionWrapper_.selectParent();
      this.selectionNode_ = this.selectionWrapper_.getDomElement();
      this.renderSelectionMode();
    }, 50);
  }

  handlePagingToggle_() {
    _tcLogEvent('SWorkshop.handlePagingToggle_');

    const pagingOn = this.isPagingToggleOn_();
    this.contentWrapper_.classList.toggle('paging-on', pagingOn);
    this.contentWrapper_.classList.remove('has-paging-data');

    if (pagingOn) {
      this.pagingListener_.setTabAndElementWrapper(this.tabId_, this.getElementWrapper_());
      this.pagingListener_.beginPagingListening();
    } else {
      this.pagingListener_.stopPaging();
    }

    this.updateVisibilities_();
  }

  handleRecordingToggle_() {
    _tcLogEvent('SWorkshop.handleRecordingToggle_');

    try {
      if (!this.isWrapperRecordable_()) {
        throw new Error(`No selection wrapper present to begin dynamic table capture.`);
      }

      const recordingOn = this.isRecordingToggleOn_();
      this.contentWrapper_.classList.toggle('recording-on', recordingOn);

      if (recordingOn) {
        this.pagingListener_.stopPaging();
        // This is what will eventually render the correct data.
        this.createSnoop_();
        this.snoop_.startRecording();
      } else {
        // If you're no longer recording, stop recording. This will fire a mutation event.
        this.snoop_ && this.snoop_.stopRecording();

        // If we're scrolling, we need to stop.
        if (this.scrollInterval_) {
          this.toggleTableScroll_();
        }
        // If we're auto-paging, we need to stop.
        if (this.autoPager_ && this.autoPager_.isOn()) {
          this.toggleTableDynPage_();
        }
      }
    } catch (err) {
      this.handleActionError_(err);
    }

    this.updateVisibilities_();
  }

  createSnoop_() {
    if (this.snoop_) {
      this.snoop_.destroy();
      this.snoop_ = null;
    }

    const identityColumnKeys = Object.keys(this.identityColumns_);
    if (this.tableWrapper_) {
      const rootValueProvider = (el) => TableUtil.nodeToArrays(el, _TCAP_COPY_CONST.rowSeparator, _TCAP_COPY_CONST.colSeparator, this.userConfig_, true);
      const rowValueProvider = (el) => TableUtil.trNodeToRowArray(el, _TCAP_COPY_CONST.colSeparator, this.userConfig_);
      this.snoop_ = new TableMutationSnoop(this.tableWrapper_.getDomElement(), rootValueProvider, rowValueProvider, identityColumnKeys);
    } else if (this.selectionWrapper_) {
      const rootValueProvider = (el) => TableUtil.getArbPreAlignmentForRoot(el, this.userConfig_);
      const rowValueProvider = (el) => TableUtil.getArbPreAlignmentForNode(el, this.userConfig_);
      this.snoop_ = new ArbMutationSnoop(this.selectionWrapper_.getDomElement(), rootValueProvider, rowValueProvider, identityColumnKeys);
      this.snoop_.setValuesPostProcessor(valueArray => TableUtil.arbAlign(valueArray, this.treatAsTable_));
    } else if (this.recipeWrapper_) {
      this.snoop_ = this.recipeWrapper_.snoop();
    } else {
      throw new Error('No dynamic table wrapper present.');
    }

    // Bind to and call to immediately reflect values.
    this.snoop_.bindToChange(this.handleMutationChanges_.bind(this));
    this.snoop_.bindToError(this.handleActionError_.bind(this));
    this.snoop_.bindToStatus(this.handleMutationStatus_.bind(this));
    this.snoop_.bindToLoading(this.handleMutationLoading_.bind(this));

    this.handleMutationChanges_();
  }

  handleMutationStatus_(message) {
    this.frame_.renderStatus(message);
  }

  handleMutationLoading_(loaing) {
    this.frame_.setLoading(loaing);
  }

  handleMutationChanges_() {
    if (!this.snoop_) {
      return;
    }

    const previousRowCount = !!this.latestDataArray_ ? this.latestDataArray_.length : 0;
    const dataArray = this.snoop_.getValues() || [];
    const rows = dataArray.length;
    const rowDelta = rows - previousRowCount;
    const cols = _tcSmartColCount(dataArray);

    this.renderTableDataPreview_({rows, cols, dataArray});
    this.updateContentFrame_(rows, cols);

    if (this.autoPager_ && this.autoPager_.isOnIsh()) {
      // NOTE(gmike, 5/6/2022): Only advancing on row-delta.
      if (rowDelta) {
        this.autoPager_.advanceEventually({delta: rowDelta, count: rows});
      }
    }

    if (this.snoop_.isSheetSyncing()) {
      const filename = this.getDownloadFilename_();
      const sheetOptions = { sheetName: "Cloud-Synced", filename };
      const instanceId = this.snoop_.getId();

      if (this.sheetsSyncBridge_.isCreateOperationOngoing(instanceId)) {
        return;
      }

      this.sheetsSyncBridge_
          .createSheet(instanceId, true, sheetOptions)
          .then(response => {
            const writeNow = response.created;
            return this.sheetsSyncBridge_.writeToSheet(
              instanceId, response.sheet.id, this.latestDataArray_, writeNow, sheetOptions);
          })
          .catch(err => this.handleActionError_(err, 'Unable to sync data to Google Sheet.'));
    }
  }

  updateColumnifyButton_(hasMulitplColumns) {
    const showButton = (
      (!hasMulitplColumns && this.selectionWrapper_ && this.treatAsTable_) ||
      (this.selectionWrapper_ && !this.treatAsTable_)
    ) && !this.isOrHasEverRecorded_() && !this.isPagingToggleOn_();
    this.contentWrapper_
        .querySelector('._tc-columnify')
        .classList.toggle('tc-hidden', !showButton);
  }

  toggleTableAutoPage_() {
    if (!this.userConfig_.paidPro) {
      return this.handleDisabledAction_('autopage');
    }

    _tcLogEvent('SWorkshop.toggleTableAutoPage_');
    const button = this.contentWrapper_.querySelector('.btn-auto-page');
    if (this.pagingListener_) {
      let autoPaging = !this.pagingListener_.isAutoPaging();
      this.pagingListener_.setAutoPage(autoPaging);
      button.classList.toggle('toggled-on', autoPaging);
    }
  }

  toggleSheetsSync_() {
    if (!this.snoop_) {
      return;
    }

    if (!this.userConfig_.paidCloud) {
      return this.handleCloudDisabledAction_('sheets-sync', chrome.i18n.getMessage('upgradeCloudForFeature_SheetsSync'));
    }

    // Toggle the value
    const nowSheetSyncing = !this.snoop_.isSheetSyncing();
    this.contentWrapper_.classList.toggle("sheets-sync-on", nowSheetSyncing);

    if (nowSheetSyncing) {
      this.snoop_.startSheetSyncing();
      this.handleMutationChanges_();
    } else {
      this.snoop_.stopSheetSyncing();
    }

    const button = this.contentWrapper_.querySelector('.btn-sync-to-sheets');
    button.classList.toggle('toggled-on', nowSheetSyncing);
  }

  toggleTableDynPage_() {
    if (!this.userConfig_.paidPro) {
      return this.handleDisabledAction_('autopage-d');
    }

    _tcLogEvent('SWorkshop.toggleTableDynPage_');
    const button = this.contentWrapper_.querySelector('.btn-auto-dynpage');
    if (this.autoPager_) {
      button.classList.remove('toggled-on');
      this.contentWrapper_.classList.remove('dyn-auto-paging-on');
      if (this.autoPager_.isOn()) {
        this.autoPager_.turnOff();
      }
      this.autoPager_ = null;
      return;
    }

    button.classList.add('toggled-on');
    this.contentWrapper_.classList.add('dyn-auto-paging-on');
    this.autoPager_ = new AutoPager();
    this.autoPager_.setAutoPagingErrorHandler((err, errorType) => {
      this.handleDynPagerMissing_(err, errorType);
    });
    this.autoPager_.beginListeningForAdvance();
  }

  toggleTableScroll_() {
    if (!this.userConfig_.paidPro) {
      return this.handleDisabledAction_('autoscroll');
    }

    _tcLogEvent('SWorkshop.toggleTableScroll_');

    const button = this.contentWrapper_.querySelector('.btn-auto-scroll');
    if (this.scrollInterval_) {
      button.classList.remove('toggled-on');
      window.clearInterval(this.scrollInterval_);
      this.scrollInterval_ = null;
      return;
    }

    // We use this to determine if auto-scrolling is effective.
    let hasScrolled = false;

    button.classList.add('toggled-on');
    this.scrollInterval_ = window.setInterval(() => {
      const elWrapper = this.getElementWrapper_();
      if (elWrapper) {
        const domEl = _tcGetScrollingElement(elWrapper.getDomElement(), 4);
        if (domEl) {
          const {scrollTop, scrollLeft} = domEl;
          const {height} = domEl.getBoundingClientRect();
          domEl.scroll(scrollLeft, scrollTop + (height * 1.25));

          if (hasScrolled && scrollTop === 0) {
            try {
              // Slow this down - this will scroll to the bottom of the page, not incrementally like above.
              if (Math.random() > .5) {
                window.scrollTo(0, document.body.scrollHeight);
              }
            } catch (err) {}
          }

          hasScrolled = true;
        }
      }
    }, _TCAP_CONFIG.scrollInterval);
  }

  toggleColumnification_() {
    if (this.selectionWrapper_) {
      this.setTreatAsTable_(!this.treatAsTable_);
      this.renderSelectionMode();
    }
  }

  setTreatAsTable_(treatAsTable) {
    this.treatAsTable_ = treatAsTable;
    if (this.selectionWrapper_) {
      this.selectionWrapper_.setTreatAsTable(this.treatAsTable_);
    }
    if (this.pagingListener_) {
      this.pagingListener_.setTreatAsTable(this.treatAsTable_);
    }
  }

  getDownloadFilename_() {
    const elWrapper = this.getElementWrapper_();
    return elWrapper && elWrapper.getFilename();
  }

  //// SEARCH

  handleSearchInit_() {
    _tcLogEvent('SWorkshop.handleSearchInit_');

    if (_tcxLogger && _tcxLogger.isEnabled()) {
      const needle = prompt("Table Capture: Please enter some text that should be in your table.", "");
      if (needle) {
        const results = _tcxLogger.search(needle);
        if (results.length) {
          this.renderJsonMode_(needle, results);
        } else {
          _tcLogEvent(`SWorkshop.handleSearchInit_ - 0r (${needle})`);
          this.frame_.renderError(`Unable to locate: ${needle}`);
        }
      }
    }
  }

  //// ERRORS

  handlePagingRenderError_(err, message) {
    console.log(`SelectionWorkshop::handleRenderError_ - ${message}`, err);
    message = _tcGetMessageFromError(err, message, true);
    this.renderPagingErrorMessage_(message);
  }

  handleSelectionRenderError_(err, message) {
    console.log(`SelectionWorkshop::handleRenderError_ - ${message}`, err);
    this.destroy(true);
    this.errorMessage_ = _tcGetMessageFromError(err, message);;
    this.renderSelectionMode();
  }

  handleModalError_(err, message) {
    this.frame_.handleModalError_(err, message);
  }

  handleActionError_(err, message) {
    console.log(`SelectionWorkshop::handleActionError_ - ${message}`, err);
    message = _tcGetMessageFromError(err, message);
    this.frame_.renderError(message);
  }
}

// The default actions that can be taken.
const _TC_SELWORK_FRAME_ACTIONS = [
  {
    className: "btn-copy",
    frame: true,
    src: 'images/icon.clipboard.add.png',
    tooltip: chrome.i18n.getMessage('copyClipboardActionTooltip'),
  },
  {
    className: "btn-sheets",
    frame: true,
    src: 'images/icon.sheets.png',
    tooltip: chrome.i18n.getMessage('googleDocActionTooltip'),
  },
  {
    className: "btn-edit",
    frame: true,
    src: 'images/icon.clipboard.edit.png',
    tooltip: chrome.i18n.getMessage('editActionTooltip'),
  },
  {
    className: "btn-csv",
    frame: true,
    src: 'images/icon.csv.b.png',
    tooltip: chrome.i18n.getMessage('csvActionTooltip'),
  },
  {
    className: "btn-excel",
    frame: true,
    src: 'images/icon.excel.svg',
    tooltip: chrome.i18n.getMessage('excelActionTooltip'),
  },
  {
    className: "btn-o365",
    frame: false,
    src: 'images/icon.o365.png',
    tooltip: chrome.i18n.getMessage('o365ActionTooltip'),
  },
  {
    className: "btn-screenshot",
    frame: false,
    src: 'images/icon.screenshot.big.png',
    tooltip: chrome.i18n.getMessage('screenshotActionTooltip'),
  },
  {
    className: "btn-markdown",
    frame: false,
    src: 'images/icon.markdown.png',
    tooltip: chrome.i18n.getMessage('markdownActionTooltip'),
  },
  {
    className: "btn-publish",
    frame: false,
    src: 'images/icon.publish.png',
    tooltip: chrome.i18n.getMessage('publishActionTooltip'),
  },
];
