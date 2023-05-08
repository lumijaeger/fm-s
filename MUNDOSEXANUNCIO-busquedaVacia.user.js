/*
==UserScript==
@name           MUNDOSEXANUNCIO-busquedaVacia
@match          https://www.mundosexanuncio.com/putas/*
@version        1.0
==/UserScript==
*/

if (document.getElementById('flashMessage').innerText === "Tu búsqueda no ha obtenido resultados"){
  window.close();
}