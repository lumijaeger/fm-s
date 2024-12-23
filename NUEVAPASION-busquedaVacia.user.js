// ==UserScript==
// @name           NUEVAPASION-busquedaVacia
// @updateURL      https://raw.githubusercontent.com/lumisjaeger/fm-s/refs/heads/master/NUEVAPASION-busquedaVacia.user.js
// @match          https://nuevapasion.com/anuncios-escort-para-hombre/buscar-*
// @version        1.0.1
// ==/UserScript==

if (document.querySelector("main > article:first-of-type:last-child"))
  window.close();
