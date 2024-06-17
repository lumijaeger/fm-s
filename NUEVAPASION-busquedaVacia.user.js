/*
==UserScript==
@name           NUEVAPASION-busquedaVacia
@match          https://nuevapasion.com/anuncios-escort-para-hombre/buscar-*
@version        1.0
==/UserScript==
*/

if (document.querySelector('div#body > div > section > article:last-of-type')) window.close();