/*
==UserScript==
@name           MILESCORTS-busquedaVacia
@match          https://www.milescorts.es/?s=*
@version        1.0
==/UserScript==
*/

let targetPhone = window.location.href.match('\\d{9}')[0];
if (document.getElementById("container").children[1].innerText === "No se han encontrado anuncios publicados en esta localidad y categoría.") window.close();