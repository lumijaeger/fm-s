/*
==UserScript==
@name           SLUMI-busquedaVacia
@match          https://www.slumi.com/escorts/espa%C3%B1a/buscar.*
@match          https://www.slumi.com/*
@version        1.0.1
==/UserScript==
*/

if (document.getElementsById('sin_resultados')[0].style.display !== 'none' || document.getElementsByClassName('no_encontrado').length > 0) window.close();