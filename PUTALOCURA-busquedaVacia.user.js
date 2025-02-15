// ==UserScript==
// @name           PUTALOCURA-busquedaVacia
// @updateURL      https://raw.githubusercontent.com/lumijaeger/fm-s/refs/heads/main/PUTALOCURA-busquedaVacia.user.js
// @match          https://foropl.com/search/*
// @version        1.0
// ==/UserScript==

setTimeout(() => {
  if (document.getElementsByClassName("blockMessage").length > 0) {
    window.close();
  }
}, 1000);
