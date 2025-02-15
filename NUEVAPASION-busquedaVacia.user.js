// ==UserScript==
// @name           NUEVAPASION-busquedaVacia
// @updateURL      https://raw.githubusercontent.com/lumijaeger/fm-s/refs/heads/main/NUEVAPASION-busquedaVacia.user.js
// @match          https://nuevapasion.com/anuncios-escort-para-hombre/buscar-*
// @version        1.0.1
// ==/UserScript==

if (document.querySelector("main > article:first-of-type:last-child"))
  window.close();
