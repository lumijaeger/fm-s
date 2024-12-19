// ==UserScript==
// @name           PUTALOCURA-busquedaVacia
// @updateURL      https://raw.githubusercontent.com/lumisjaeger/fm-s/refs/heads/master/PUTALOCURA-busquedaVacia.user.js
// @match          https://foropl.com/search/*
// @version        1.0
// ==/UserScript==

setTimeout(() => {
  if (document.getElementsByClassName("blockMessage").length > 0) {
    window.close();
  }
}, 1000);
