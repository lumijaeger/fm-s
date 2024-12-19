// ==UserScript==
// @name           NUEVAPASION-busquedaVacia
// @updateURL      https://raw.githubusercontent.com/lumisjaeger/fm-s/refs/heads/master/NUEVAPASION-busquedaVacia.user.js
// @match          https://nuevapasion.com/anuncios-escort-para-hombre/buscar-*
// @version        1.0
// ==/UserScript==

if (document.querySelector("div#body > div > section > article:last-of-type"))
  window.close();
