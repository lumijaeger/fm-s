// ==UserScript==
// @name           LOOVIFY-busqueda
// @updateURL      https://raw.githubusercontent.com/lumisjaeger/fm-s/refs/heads/master/LOOVIFY-busqueda.user.js
// @match          https://www.loovify.com/todos-los-anuncios?*
// @version        1.0
// ==/UserScript==

if (document.querySelector("div.listings-container").childElementCount <= 1)
  window.close();
