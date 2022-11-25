
class ResponseLogger {
  constructor() {
    this.id_ = `_tcx-${_tcRandString()}`;
    this.responses_ = [];
    this.enabled_ = true;
  }

  getResponseCount() {
    return this.responses_.length;
  }

  isEnabled() {
    return this.enabled_;
  }

  setEnabled(enabled) {
    this.enabled_ = enabled;

    if (!this.enabled_ && this.checkInterval_) {
      window.clearInterval(this.checkInterval_);
      this.checkInterval_ = null;
    }
  }

  getContainerId() {
    return this.id_;
  }

  listen() {
    if (!this.enabled_) {
      return;
    }

    this.renderContainer_();
    this.checkInterval_ = window.setInterval(this.logResponses_.bind(this), 1000);
  }

  search(needle) {
    const results = [];
    this.responses_.forEach(body => {
      if (body.response.includes(needle)) {
        results.push(body);
      }
    });
    return results;
  }

  logResponses_() {
    Array
        .from(document.querySelectorAll(`div#${this.id_} div`))
        .forEach(div => {
          const url = div.getAttribute('data-tcx-url');
          const response = div.innerText;
          div.remove();
          this.responses_.push({url, response});
        });
  }

  renderContainer_() {
    const el = document.createElement('div');
    el.className = '_tc_offscreeneded';
    el.id = this.id_;
    document.body.appendChild(el);
  }
}
