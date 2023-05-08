/*
==UserScript==
@name           LOQUOSEX-busqueda
@match          https://www.loquosex.com/?s=*
@version        1.0
==/UserScript==
*/

if (document.querySelector('section.error-caja') !== null) window.close();