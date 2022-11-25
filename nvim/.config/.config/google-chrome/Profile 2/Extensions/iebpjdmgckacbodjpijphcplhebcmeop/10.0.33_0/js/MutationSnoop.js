
const _TCAP_DEFAULT_TABLE_XPATH = '//*/table';

////

class MutationSnoop {
  constructor(el, rootValueProvider, rowValueProvider, identityColumns=[]) {
    this.id_ = Math.random().toString(36).slice(2);

    this.el_ = null;
    this.selectorForEl_ = null;
    this.pathToEl_ = null;
    this.parentChain_ = null;

    this.rootValueProvider_ = rootValueProvider;
    this.rowValueProvider_ = rowValueProvider;
    this.identityColumns_ = identityColumns;

    this.setElement_(el);

    this.recording_ = false;
    this.globalObserver_ = null;
    this.mutationObserver_ = null;
    this.onChangeListeners_ = [];
    this.onErrorListeners_ = [];
    this.onStatusListeners_ = [];
    this.onLoadingListeners_ = [];

    this.sheetSyncing_ = false;

    this.values_ = this.rootValueProvider_(el);
    this.newValues_ = [];
    this.rowHashMap_ = {};

    this.postProcessor_ = null;

    this.batch_ = [];
    this.batchTimeout_ = null;

    this.hashAndLogValues_(this.values_);
  }

  getId() {
    return this.id_;
  }

  setElement_(el) {
    this.el_ = el;
    this.buildParentChain_();
    // This shouldn't change so only set it once.
    if (!this.pathToEl_) {
      this.selectorForEl_ = _tcSpecificGetSelectorForEl(el);
      this.pathToEl_ = _tcGetPathTo(el);
    }
  }

  buildParentChain_() {
    this.parentChain_ = [this.el_];

    let parent = this.el_.parentElement;
    while (parent) {
      this.parentChain_.push(parent);
      parent = parent.parentElement;
    }
  }

  setValuesPostProcessor(postProcessor) {
    this.postProcessor_ = postProcessor;
  }

  bindToChange(listener) {
    this.onChangeListeners_.push(listener);
  }

  bindToError(listener) {
    this.onErrorListeners_.push(listener);
  }

  bindToStatus(listener) {
    this.onStatusListeners_.push(listener);
  }

  bindToLoading(listener) {
    this.onLoadingListeners_.push(listener);
  }

  isRecording() {
    return this.recording_;
  }

  destroy() {
    try {
      if (this.recording_) {
        this.stopRecording();
      }
    } catch (err) {}
  }

  killMutationObserver_() {
    if (this.mutationObserver_) {
      this.mutationObserver_.disconnect();
      this.mutationObserver_ = null;
    }
  }

  getRowCount() {
    return this.values_.length + this.newValues_.length;
  }

  hasNewValues() {
    return this.newValues_ && this.newValues_.length != 0;
  }

  getValues() {
    const allValues = this.values_.concat(this.newValues_);
    return JSON.parse(
      JSON.stringify(this.postProcessValues_(allValues))
    );
  }

  startRecording() {
    this.recording_ = true;
    this.globalObserver_ = this.beginObserving_(document.body, this.handleGlobalMutations_.bind(this));
    this.mutationObserver_ = this.beginObserving_(this.el_, this.handleMutations_.bind(this));
  }

  beginObserving_(domElement, handleCb) {
    const attrs = {
      attributes: true,
      attributeOldValue: true,
      characterData: true,
      characterDataOldValue: true,
      childList: true,
      subtree: true,
    };
    const observer = new MutationObserver(handleCb);
    observer.observe(domElement, attrs);
    return observer;
  }

  stopRecording() {
    this.recording_ = false;
    if (this.globalObserver_) {
      this.globalObserver_.disconnect();
      this.globalObserver_ = null;
    }
    this.killMutationObserver_();
    this.fireOnChange_();
  }

  handleGlobalMutations_(mutations) {
    mutations.forEach(mutation => {
      if (mutation.removedNodes && mutation.removedNodes.length) {
        const elRemoved = Array
            .from(mutation.removedNodes)
            .some(el => this.parentChain_.includes(el));
        if (elRemoved) {
          this.handleElSwap_();
        }
      }
    });
  }

  handleElSwap_() {
    this.fireOnLoading_(true);
    _tcWaitForPathOrSoloSelector(this.pathToEl_, this.selectorForEl_, 5 * 1000)
        .then(el => this.handleSwappedElFound_(el))
        .catch(err => {
          this.fireOnLoading_(false);

          if (this.hasAlternateXPath_()) {
            this.pathToEl_ = _TCAP_DEFAULT_TABLE_XPATH;
            this.handleElSwap_();
          } else {
            this.fireOnError_(err, 'Page mutation observation error.');
          }
        });
  }

  handleSwappedElFound_(el) {
    this.fireOnLoading_(false);
    this.killMutationObserver_();
    this.setElement_(el);
    this.mutationObserver_ = this.beginObserving_(this.el_, this.handleMutations_.bind(this));
    
    const rowValues = this.rootValueProvider_(el) || [];
    rowValues.forEach(rowValue => this.handleMaybeNewValue_(rowValue));

    this.fireOnChange_();
  }

  handleMutations_(mutations) {
    let mutated = false;
    mutations
        .filter(mutation => {
          if (mutation.type === "attributes") {
            return !mutation.attributeName.includes("aria-") &&
                // NOTE(gmike, 3-2-2022): Infinite loop: aia.org
                !mutation.attributeName.includes("data-feathr-");
          }
          return true;
        })
        .forEach(mutation => {
          mutated = true;
          if (mutation.addedNodes && mutation.addedNodes.length) {
            mutation.addedNodes.forEach(el => this.hashAndAdd_(el));
          }
          if (mutation.removedNodes && mutation.removedNodes.length) {
            // No-op. For now at least.
          }
          if (mutation.target && mutation.type === 'characterData') {
            this.handleSubMutation_(mutation.target);
          }
        });

    if (mutated) {
      this.fireOnChange_();
    }
  }

  handleSubMutation_(targetEl) {
    const rowEl = this.getRowIshThingFromEl_(targetEl);

    // For each row, add it to a batch to be processed
    if (rowEl) {
      this.batch_.push(rowEl);

      if (this.batchTimeout_) {
        window.clearTimeout(this.batchTimeout_);
        this.batchTimeout_ = null;
      }
      this.batchTimeout_ = window.setTimeout(
          this.processBatch_.bind(this), _TCAP_CONFIG.batchWait);
    }
  }

  processBatch_() {
    this.batch_.forEach(rowEl => this.hashAndAdd_(rowEl));
    this.batch_ = [];
    this.batchTimeout_ = null;

    this.fireOnChange_();
  }

  fireOnError_(err, message) {
    this.onErrorListeners_.forEach(listener => listener(err, message));
  }

  fireOnStatus_(message) {
    this.onStatusListeners_.forEach(listener => listener(message));
  }

  fireOnChange_() {
    this.onChangeListeners_.forEach(listener => listener());
  }

  fireOnLoading_(loading) {
    this.onLoadingListeners_.forEach(listener => listener(loading));
  }

  getRowIshThingFromEl_(targetEl) {
    throw new Error('Not implemented in parent class');
  }

  hashAndAdd_(node) {
    const el = this.getRowIshThingFromEl_(node);
    if (el) {
      this.handleMaybeNewValue_(this.rowValueProvider_(el));
    }
  }

  handleMaybeNewValue_(rowValue) {
    if (!rowValue) {
      return;
    }

    const hash = this.getValueHash_(rowValue);
    if (this.hasAddedRowHash_(hash)) {
      if (this.identityColumns_.length) {
        let index = this.rowHashMap_[hash];
        if (index >= this.values_.length) {
          index = index - this.values_.length;
          this.newValues_[index] = rowValue;
        } else {
          this.values_[index] = rowValue;
        }
      } else {
        // No-op.
      }
    } else {
      this.rowHashMap_[hash] = this.values_.length + this.newValues_.length;
      this.newValues_.push(rowValue);
    }
  }

  hashAndLogValues_(values) {
    if (!values || values.length === 0) {
      return;
    }
    values.forEach((value, i) => {
      const hash = this.getValueHash_(value);
      this.rowHashMap_[hash] = i;
    });
  }

  hasAddedRowHash_(hash) {
    return this.rowHashMap_.hasOwnProperty(hash);
  }

  getValueHash_(value) {
    let valueToFingerprint = value;
    if (this.identityColumns_ && this.identityColumns_.length) {
      valueToFingerprint = value.filter((_c, i) => this.identityColumns_.includes(String(i)));
    }
    return btoa(unescape(encodeURIComponent(valueToFingerprint.join('~'))));
  }

  postProcessValues_(values) {
    if (this.postProcessor_) {
      return this.postProcessor_(values);
    }
    return values;
  }

  //// SHEET SYNCING

  isSheetSyncing() {
    return this.sheetSyncing_;
  }

  startSheetSyncing() {
    this.sheetSyncing_ = true;
  }

  stopSheetSyncing() {
    this.sheetSyncing_ = false;
  }
}

class TableMutationSnoop extends MutationSnoop {
  getRowIshThingFromEl_(targetEl) {
    let rowEl = targetEl;
    while (rowEl && rowEl.parentElement !== this.el_) {
      if (rowEl && rowEl.tagName && rowEl.tagName.toUpperCase() === 'TR') {
        return rowEl;
      }
      rowEl = rowEl.parentElement;
    }

    // NOTE(gmike, 2021-04-02): This is happening inexplicably with ebay reviews
    // NOTE(gmike, 2021-08-26): This was messing up Deon's namestation export.
    if (rowEl && rowEl.tagName === "TBODY" && window.location.href.includes('ebay')) {
      return null;
    }

    return rowEl;
  }

  hasAlternateXPath_() {
    return this.pathToEl_
        && this.pathToEl_.includes('table')
        && this.pathToEl_ !== _TCAP_DEFAULT_TABLE_XPATH;
  }
}

class ArbMutationSnoop extends MutationSnoop {
  getRowIshThingFromEl_(targetEl) {
    let rowEl = targetEl;
    while (rowEl && rowEl.parentElement !== this.el_) {
      rowEl = rowEl.parentElement;
    }
    return rowEl;
  }

  getValueHash_(preAlignedValue) {
    // preAlignedValue may be just an array of vals for recipes.
    let vals = preAlignedValue;
    if (vals.length && typeof vals[0] === "object") {
      vals = vals.map(v => v.val);
    }

    let valueToFingerprint = vals;
    if (this.identityColumns_ && this.identityColumns_.length) {
      valueToFingerprint = vals.filter((_c, i) => this.identityColumns_.includes(String(i)));
    }

    return btoa(unescape(encodeURIComponent(valueToFingerprint.join('~'))));
  }

  hasAlternateXPath_() {
    return false;
  }
}
