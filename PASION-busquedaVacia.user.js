// ==UserScript==
// @name           PASION-busquedaVacia
// @updateURL      https://raw.githubusercontent.com/lumijaeger/fm-s/refs/heads/main/PASION-busquedaVacia.user.js
// @match          https://www.pasion.com/anuncios/*
// @version        1.0
// ==/UserScript==

if (document.getElementsByClassName("nohayanuncios").length !== 0)
  window.close();
