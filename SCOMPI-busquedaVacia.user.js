/*
==UserScript==
@name           SCOMPI-busquedaVacia
@match          https://www.slumi.com/
@match          https://www.slumi.com/*
@version        1.0
==/UserScript==
*/

if (document.getElementsById('sin_resultados')[0].style.display !== 'none' || document.getElementsByClassName('no_encontrado').length > 0) window.close();