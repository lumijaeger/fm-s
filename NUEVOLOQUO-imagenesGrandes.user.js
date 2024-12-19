// ==UserScript==
// @name           NUEVOLOQUO-imagenesGrandes
// @updateURL      https://raw.githubusercontent.com/lumisjaeger/fm-s/refs/heads/master/NUEVOLOQUO-imagenesGrandes.user.js
// @match          https://www.nuevoloquo.com/escort/*
// @match          https://www.nuevoloquo.ch/escort/*
// @version        1.0
// ==/UserScript==

[...document.querySelectorAll("[data-retina]")].forEach(
  (el) => (el.src = el.dataset.retina)
);
