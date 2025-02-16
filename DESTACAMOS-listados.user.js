// ==UserScript==
// @name           DESTACAMOS-listados
// @updateURL      https://raw.githubusercontent.com/lumijaeger/fm-s/refs/heads/main/DESTACAMOS-listados.user.js
// @match          https://www.destacamos.com/*/telefono-*/listings.html
// @match          https://www.destacamos.com/telefono-*/listings.html
// @match          https://www.destacamos.net/*/telefono-*/listings.html
// @match          https://www.destacamos.net/telefono-*/listings.html
// @version        1.0
// ==/UserScript==

const phone = window.location.href.match(/.*?telefono-(\d{9})/)?.[1];

window.location.replace(
  "https://www.destacamos.com/keyword-" + phone + "/listings.html"
);
