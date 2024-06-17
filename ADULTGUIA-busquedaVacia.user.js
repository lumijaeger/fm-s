// ==UserScript==
// @name           ADULTGUIA-busquedaVacia
// @match          https://es.adultguia.com/anuncios-eroticos/escorts-y-putas/contactos/buscar-*
// @version        1.1
// ==/UserScript==

if ((!document.getElementById("page-body")) || document.getElementById("http-error")) {
  window.close();
}