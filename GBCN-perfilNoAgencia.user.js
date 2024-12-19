// ==UserScript==
// @name           GBCN-perfilNoAgencia
// @updateURL      https://raw.githubusercontent.com/lumisjaeger/fm-s/refs/heads/master/GBCN-perfilNoAgencia.user.js
// @match          https://www.girlsmadrid.com/escort*
// @match          https://www.girlsbarcelona.com/escort*
// @match          https://www.girlsbcn.net/gb*
// @version        1.0
// @run-at         document_idle
// ==/UserScript==

if (
  document.querySelector("li:nth-child(2) span.mi-contacto")?.innerText ===
  "Telefonista"
)
  window.close();
