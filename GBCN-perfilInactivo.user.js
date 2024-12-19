// ==UserScript==
// @name           GBCN-perfilInactivo
// @updateURL      https://raw.githubusercontent.com/lumisjaeger/fm-s/refs/heads/master/GBCN-perfilInactivo.user.js
// @match          https://www.girlsmadrid.com/escort*
// @match          https://www.girlsbarcelona.com/escort*
// @match          https://www.girlsbcn.net/gb*
// @version        1.0.1
// @run-at         document_idle
// ==/UserScript==

const availability = document.querySelector(
  "div.widget:nth-child(5) ul.meta-post li span:nth-child(2)"
)?.innerText;

if (availability === "NO DISPONIBLE" || availability === "PERFIL INACTIVO")
  window.close();
