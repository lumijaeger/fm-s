// ==UserScript==
// @name           MILEROTICOS-busquedaVacia
// @updateURL      https://raw.githubusercontent.com/lumisjaeger/fm-s/refs/heads/master/MILEROTICOS-busquedaVacia.user.js
// @match          https://www.mileroticos.com/escorts/buscar-*
// @version        1.0
// ==/UserScript==

if (document.getElementById("http-error")) {
  window.close();
}
