// ==UserScript==
// @name           MILEROTICOS-busquedaVacia
// @updateURL      https://raw.githubusercontent.com/lumijaeger/fm-s/refs/heads/main/MILEROTICOS-busquedaVacia.user.js
// @match          https://www.mileroticos.com/escorts/buscar-*
// @version        1.0
// ==/UserScript==

if (document.getElementById("http-error")) {
  window.close();
}
