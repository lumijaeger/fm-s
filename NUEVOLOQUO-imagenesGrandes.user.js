/*
==UserScript==
@name           NUEVOLOQUO-imagenesGrandes
@match          https://www.nuevoloquo.com/escort/*
@version        1.0
==/UserScript==
*/

[...document.querySelectorAll('[data-retina]')].forEach(el => el.src = el.dataset.retina);