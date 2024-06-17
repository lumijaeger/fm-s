/*
==UserScript==
@name           NUEVOLOQUO-imagenesGrandes
@match          https://www.nuevoloquo.com/escort/*
@match          https://www.nuevoloquo.ch/escort/*
@version        1.0
==/UserScript==
*/

[...document.querySelectorAll('[data-retina]')].forEach(el => el.src = el.dataset.retina);