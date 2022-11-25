
class CloudUpgradeManager {
  constructor(userConfig) {
    this.userConfig_ = userConfig;
    this.authWrapper_ = new AuthWrapper();
    this.token_ = null;

    this.init_();
  }

  init_() {
    document
        .querySelector('.btn-get-started')
        .addEventListener('click', this.handleFlowStart_.bind(this));
  }

  handleFlowStart_() {
    const api = new GMikeAPI();

    this.setLoading_(true);
    this.authWrapper_
        .requestPerms()
        .then(() => this.authWrapper_.getGoogleToken())
        .then(token => {
          this.token_ = token;
          return api.getUserEmailWithToken(token);
        })
        .then(user => {
          if (user) {
            this.setUser_(user);
            return api.getCloudLicensesWithToken(this.token_);
          }
          return [];
        })
        .then(cloudLicenseResponse => {
          throw new Error("Please reach out to George; the rest of this flow hasn't been implemented yet.");

          // TODO(gmike): Finish this all.
          const { licenses, cloudLicenses } = cloudLicenseResponse;
          const now = new Date().getTime();
          const activeLicenses = licenses
              .filter(l => !l.cancelled)
              .filter(l => Number(l.expiration) > now);

          if (licenses.length) {
            if (activeLicenses.length) {
              return this.updateCloudActivation_(true);
            }
            return this.handleInactiveLicenses_(cloudLicenseResponse);
          }

          window.open(_TCAP_CONFIG.cloudLicensePurchaseUrl + `?email=${user.email}&tk=${this.token_}`);
          return this.waitForHaveLicense_();
        })
        .catch(err => this.handleError_(err))
        .finally(() => {
          this.setLoading_(false);
        });
  }

  waitForHaveLicense_() {
    return new Promise((resolve, reject) => {
      // TODO(gmike): I don't know what to do here.
    });
  }

  updateCloudActivation_(active) {
    return Promise.resolve();
  }

  handleInactiveLicenses_(cloudLicenseResponse) {
    // TODO(gmike): Implement.
    return Promise.resolve();
  }

  setLoading_(loading) {
    // TODO(gmike): Implement. Change buttons.
  }

  setUser_(user) { 
    // Set user in background page
  }

  //// ALERTS AND ERRORS

  createAlert_(message) {
    const alert = document.createElement('div');
    alert.innerHTML = `<span class="tc-alert-message">${message}</span><div class="additional-info hidden"></div>`;
    alert.addEventListener('click', () => {
      alert.classList.add('hidden');
    });

    return alert;
  }

  handleError_(err, message="") {
    if (err && err.message) {
      message = err.message;
    } else if (typeof err === 'string') {
      message = err;
    } else if (typeof err === 'object' && err.err) {
      message = err.err;
    }
    this.displayAlert_(message);
  }

  displayAlert_(message) {
    const alert = this.createAlert_(message);
    alert.className = 'alert alert-warning';

    const errorWrapper = document.querySelector('.global-errors');
    errorWrapper.appendChild(alert);
  }
}
