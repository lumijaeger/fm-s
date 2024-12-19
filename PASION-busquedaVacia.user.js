// ==UserScript==
// @name           PASION-busquedaVacia
// @updateURL      https://raw.githubusercontent.com/lumisjaeger/fm-s/refs/heads/master/PASION-busquedaVacia.user.js
// @match          https://www.pasion.com/anuncios/*
// @version        1.0
// ==/UserScript==

if (document.getElementsByClassName("nohayanuncios").length !== 0)
  window.close();
