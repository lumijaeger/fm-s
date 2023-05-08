/*
==UserScript==
@name           NUEVOLOQUO-busquedaVacia
@match          https://www.nuevoloquo.com/anuncios-eroticos/anuncios-contactos/putas/*
@version        1.0
==/UserScript==
*/

if (!document.querySelector('div#headerResult div h2')) {
  window.close();
}