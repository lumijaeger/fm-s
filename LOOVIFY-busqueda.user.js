// ==UserScript==
// @name           LOOVIFY-busqueda
// @match          https://www.loovify.com/todos-los-anuncios?*
// @version        1.0
// ==/UserScript==

if (document.querySelector("div.listings-container").childElementCount <= 1) window.close();