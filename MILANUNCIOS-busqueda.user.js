// ==UserScript==
// @name           MILANUNCIOS-busqueda
// @updateURL      https://raw.githubusercontent.com/lumijaeger/fm-s/refs/heads/main/MILANUNCIOS-busqueda.user.js
// @match          https://www.milanuncios.com/ofertas-de-empleo/?s=*
// @version        1.0
// ==/UserScript==

// Búsqueda vacía
if (document.querySelector(".ma-ContentListingZeroResults") !== null)
  window.close();
