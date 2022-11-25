
class JsonTableWrapper extends ElementWrapper {
  constructor(url, userConfig) {
    super(null, url, userConfig);

    this.responseIndex_ = 0;
    this.path_ = null;
    this.needle_ = null;
    this.responses_ = null;
  }

  processJsonResponses(needle, responses, responseIndex) {
    this.needle_ = needle;
    this.responses_ = responses;
    this.responseIndex_ = responseIndex;

    try {
      const response = this.responses_[this.responseIndex_].response;
      const dataObj = JSON.parse(response);
      const {obj} = _tcFindArrayInObject(needle, dataObj);
      if (obj) {
        this.json_ = obj;
        this.define_();
        return Promise.resolve();
      }
      return Promise.reject(new Error(`Unable to locate ${needle} in response.`));
    } catch (err) {
      return Promise.reject(err);
    }
  }

  getTableId() {
    return `tc-response-${this.responseIndex_}`;
  }

  getData() {
    return this.def;
  }

  getAsArrays() {
    return this.def.dataArray;
  }

  getAsString (outputFormat) {
    const str = TableUtil.arrayOfArraysToString(this.def.dataArray, _TCAP_COPY_CONST.rowSeparator, _TCAP_COPY_CONST.colSeparator);
    return TableUtil.postProcessFinalString(str, outputFormat, _TCAP_COPY_CONST);
  }

  define_() {
    if (this.json_) {
      const data = _tcArrayOfObjectsToArrayOfArrays(this.json_);
      this.def = {
        dataArray: data,
        rows: data.length,
        cols: (data.length) ? data[0].length : 0,
      };
    } else {
      this.def = {rows: 0, cols: 0, dataArray: []};
    }
  }

  //// NO-OP AND UNSUPPORTED

  scrollTo () {}
  highlight () {}
  highlightPostCopy () {}
  unhighlight () {}
  screenshot () { return Promise.reject(new Error('This is not supported.')); }
}
