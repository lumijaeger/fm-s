/*
==UserScript==
@name           MILANUNCIOS-busqueda
@match          https://www.milanuncios.com/ofertas-de-empleo/?s=*
@version        1.0
==/UserScript==
*/

// Búsqueda vacía
if (document.querySelector(".ma-ContentListingZeroResults") !== null) window.close();