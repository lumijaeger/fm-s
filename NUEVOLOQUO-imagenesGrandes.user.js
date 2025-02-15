// ==UserScript==
// @name           NUEVOLOQUO-imagenesGrandes
// @updateURL      https://raw.githubusercontent.com/lumijaeger/fm-s/refs/heads/main/NUEVOLOQUO-imagenesGrandes.user.js
// @match          https://www.nuevoloquo.com/escort/*
// @match          https://www.nuevoloquo.ch/escort/*
// @version        1.0
// ==/UserScript==

[...document.querySelectorAll("[data-retina]")].forEach(
  (el) => (el.src = el.dataset.retina)
);
