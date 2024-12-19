// ==UserScript==
// @name           ADULTGUIA-busquedaVacia
// @updateURL      https://raw.githubusercontent.com/lumisjaeger/fm-s/refs/heads/master/ADULTGUIA-busquedaVacia.user.js
// @match          https://es.adultguia.com/anuncios-eroticos/escorts-y-putas/contactos/buscar-*
// @version        1.1
// ==/UserScript==

if (
  !document.getElementById("page-body") ||
  document.getElementById("http-error")
) {
  window.close();
}
