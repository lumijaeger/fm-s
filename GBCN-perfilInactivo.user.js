/*
==UserScript==
@name           GBCN-perfilInactivo
@match          https://www.girlsmadrid.com/escort*
@match          https://www.girlsbarcelona.com/escort*
@match          https://www.girlsbcn.net/gb*
@version        1.0.1
@run-at         document_idle
==/UserScript==
*/

if (document.querySelector("div.widget:nth-child(5) ul.meta-post li span:nth-child(2)")?.innerText === 'NO DISPONIBLE') window.close();