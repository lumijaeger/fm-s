/*
==UserScript==
@name           MILESCORTS-busquedaVacia
@match          https://www.milescorts.es/escorts-y-putas/?s=*
@version        1.0
==/UserScript==
*/

if (document.getElementById('container')
    .textContent
    .includes('No se han encontrado anuncios publicados en esta localidad y categoría'))
  window.close();