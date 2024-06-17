// ==UserScript==
// @name           GBCN-perfilNoAgencia
// @match          https://www.girlsmadrid.com/escort*
// @match          https://www.girlsbarcelona.com/escort*
// @match          https://www.girlsbcn.net/gb*
// @version        1.0
// @run-at         document_idle
// ==/UserScript==

if (document.querySelector("li:nth-child(2) span.mi-contacto")?.innerText === 'Telefonista') window.close();