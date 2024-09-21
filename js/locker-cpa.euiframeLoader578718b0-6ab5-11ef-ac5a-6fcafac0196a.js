(function () {
    let hidden = 1;
    let html = document.querySelector('html');
    let body = document.getElementsByTagName("body")[0];
    body = body ? body : false;

    if(html) {
      html.style.height = '100%';
    }

    if(body && !hidden) {
      body.style.height = '100%';
      body.style.position = 'relative';
      body.style.margin = '0';
      body.style.overflow = 'hidden';
    }

    const viewport = document.querySelector('meta[name=viewport]');
    if (!viewport) {
      const metaTag = document.createElement('meta');
      metaTag.name = "viewport";
      metaTag.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0";
      document.getElementsByTagName('head')[0].appendChild(metaTag);
    }
    if (body) {
      const iframe = document.createElement("iframe");
      iframe.setAttribute("id", "578718b0-6ab5-11ef-ac5a-6fcafac0196a");
      iframe.setAttribute("src", "https://locker-cpa.eu/iframe/578718b0-6ab5-11ef-ac5a-6fcafac0196a?if=1");
      iframe.setAttribute('data-id', "578718b0-6ab5-11ef-ac5a-6fcafac0196a");
      iframe.setAttribute("sandbox", "allow-top-navigation allow-scripts allow-same-origin allow-popups allow-forms");
      iframe.style.position = "absolute";
      iframe.style.top = -99999;
      iframe.style.left = -999999;
      iframe.style.bottom = 0;
      iframe.style.right = 0;
      iframe.style.width = '100vw';
      iframe.style.minHeight = '100%';
      iframe.style.border = 'none';
      iframe.style.margin = 0;
      iframe.style.padding = 0;
      iframe.style.zIndex = 9999999;
      iframe.style.overflow = 'hidden';

      iframe.style.height = body.offsetHeight + 'px';

if (hidden) { iframe.style.display = 'none'; }
      body.appendChild(iframe);

      window.addEventListener('message', function (e) {
        try {
          let json = JSON.parse(e.data);

        if (json.action === 'getSize') {
iframe.contentWindow.postMessage(JSON.stringify({action: 'postSize', 'w': window.innerWidth, 'bodyHeight': body.offsetHeight }), '*');
}
          if (json.action === 'showLocker' && json.lockerId === '578718b0-6ab5-11ef-ac5a-6fcafac0196a') {
            iframe.style.top = 0;
            iframe.style.left = 0;
            iframe.style.display = 'block';
            iframe.style.height = body.offsetHeight + 'px';
          }
        } catch (e) {
          if (e.data === 'showLocker') {
            iframe.style.top = 0;
            iframe.style.left = 0;
            iframe.style.display = 'block';
            iframe.style.height = body.offsetHeight + 'px';
          }
        }
      });
    }
  })();

  if (typeof showLocker !== "function") {
    function showLocker(lockerId) {
      const targetIframe = document.querySelector('iframe[data-id="' + lockerId + '"]');
      if (targetIframe) {
        targetIframe.contentWindow.postMessage(JSON.stringify({action: 'showLockerOnclick', 'w': window.innerWidth}), '*');
        targetIframe.style.top = 0;
        targetIframe.style.left = 0;
      }
    }
  }

