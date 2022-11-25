
const _tcxLogger = new ResponseLogger();

function _tcxXHRLog() {
  const responseContainerId = _tcxLogger.getContainerId();

  const xhrOverrideScript = document.createElement('script');
  xhrOverrideScript.type = 'text/javascript';
  xhrOverrideScript.innerHTML = `
    (function() {
      var container = document.querySelector('#${responseContainerId}');
      if (!container) {
        return;
      }

      function addToContainer(url, text) {
        const wrapper = document.createElement('div');
        wrapper.setAttribute('data-tcx-url', url);
        wrapper.innerText = text;
        container.appendChild(wrapper);
      }

      const fetch = window.fetch
      window.fetch = function() {
        return Promise.resolve(fetch.apply(window, arguments))
            .then(async response => {
              if (response.ok) {
                try {
                  const clone = response.clone();
                  const json = await clone.json();
                  addToContainer(clone.url, JSON.stringify(json));
                } catch (err) {}
              }
              return response;
            });
      };

      var XHR = XMLHttpRequest.prototype;
      var send = XHR.send;
      var open = XHR.open;
      XHR.open = function(method, url) {
        this.url = url;
        return open.apply(this, arguments);
      };
      XHR.send = function() {
        this.addEventListener('load', function() {
          try {
            const response = this.response;
            if (response && response.length) {
              const firstChar = response[0];
              if (firstChar === '[' || firstChar === '{') {
                addToContainer(this.url, response);
              }
            }
          } catch (err) {
            // No-op.
          }
        });
        return send.apply(this, arguments);
      };
    })();
  `;
  document.head.prepend(xhrOverrideScript);
}

function _tcxCheckForDOM() {
  if (document.body && document.head) {
    _tcxLogger.listen();
    _tcxXHRLog();
  } else {
    requestIdleCallback(_tcxCheckForDOM);
  }
}

const ignoreHostnames = [
  "mail.google.com",
];
const hostname = window.location.hostname;
if (ignoreHostnames.includes(hostname)) {
  // No-op.
} else {
  try {
    requestIdleCallback(_tcxCheckForDOM);
  } catch (err) {
    console.log('content_xhr.js::globalTryCatch()', err);
    _tcLogEvent('TCX-GlobalErrorCaught');
  }  
}
