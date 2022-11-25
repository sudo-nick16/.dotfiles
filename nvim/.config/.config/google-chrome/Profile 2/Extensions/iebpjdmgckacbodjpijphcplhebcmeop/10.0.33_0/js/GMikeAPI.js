
class GMikeAPI {
  constructor() {
    this.checkJsonResponse_ = (response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    };
  }

  checkApiAvailability() {
    return new Promise((resolve) => {
      let timeout = window.setTimeout(() => {
        resolve(false);
      }, 2 * 1000);

      const url = _TCAP_CONFIG.api.ping;
      fetch(url)
          .then(response => {
            resolve(!!response.ok);
            if (timeout) {
              window.clearTimeout(timeout);
            }
          })
          .catch(err => resolve(false));
    });
  }

  getCloudLicensesWithToken(token) {
    const url = _TCAP_CONFIG.api.cloudLicenses;
    const params = {
      method: 'POST',
      body: JSON.stringify({token}),
      headers:{'Content-Type': 'application/json'},
    };

    return fetch(url, params)
      .then(this.checkJsonResponse_)
      .catch(err => {
        return Promise.reject({err: err.message || "Unable to retrieve cloud licenses"});
      });
  }

  getUserEmailWithToken(token) {
    const url = _TCAP_CONFIG.api.auth;
    const params = {
      method: 'POST',
      body: JSON.stringify({token}),
      headers:{'Content-Type': 'application/json'},
    };

    return fetch(url, params)
      .then(this.checkJsonResponse_)
      .catch(err => {
        return Promise.reject({err: err.message || "Unable to get user email"});
      });
  }

  signupForCloud(bodyParams) {
    const url = _TCAP_CONFIG.api.cloudSignup;
    const params = {
      method: 'POST',
      body: JSON.stringify(bodyParams),
      headers:{'Content-Type': 'application/json'},
    };

    return fetch(url, params)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
      });
  }

  persistPublicTable(publicTable) {
    publicTable.dataProvider = `Table Capture ${_TCAP_CONFIG.versionText}`;
    if (publicTable.tableDataArray) {
      const tableData = publicTable.tableDataArray;
      publicTable.rows = tableData.length;
      publicTable.columns = tableData.length && tableData[0].length;
      publicTable.tableData = JSON.stringify(tableData);
      delete publicTable.tableDataArray;
    }

    const url = _TCAP_CONFIG.api.publishTable;
    const params = {
      method: 'POST',
      body: JSON.stringify(publicTable),
      headers:{'Content-Type': 'application/json'},
    };

    return fetch(url, params)
      .then(this.checkJsonResponse_)
      .catch(err => {
        return Promise.reject({err: err.message || "Unable to save table."});
      });
  }
}
