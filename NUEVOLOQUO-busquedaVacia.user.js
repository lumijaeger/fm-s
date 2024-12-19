// ==UserScript==
// @name           NUEVOLOQUO-busquedaVacia
// @updateURL      https://raw.githubusercontent.com/lumisjaeger/fm-s/refs/heads/master/NUEVOLOQUO-busquedaVacia.user.js
// @match          https://www.nuevoloquo.com/anuncios-eroticos/anuncios-contactos/putas/*
// @match          https://www.nuevoloquo.ch/anuncios-eroticos/anuncios-contactos/putas/*
// @version        1.0
// ==/UserScript==

if (!document.querySelector("div#headerResult div h2")) {
  window.close();
}
