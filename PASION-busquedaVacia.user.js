/*
==UserScript==
@name           PASION-busquedaVacia
@match          https://www.pasion.com/anuncios/*
@version        1.0
==/UserScript==
*/

if (document.getElementsByClassName('nohayanuncios').length !== 0)  window.close();