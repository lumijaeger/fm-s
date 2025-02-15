// ==UserScript==
// @name           MUNDOSEXANUNCIO-busquedaVacia
// @updateURL      https://raw.githubusercontent.com/lumijaeger/fm-s/refs/heads/main/MUNDOSEXANUNCIO-busquedaVacia.user.js
// @match          https://www.mundosexanuncio.com/putas/*
// @version        1.0
// ==/UserScript==

if (
  document.getElementById("flashMessage").innerText ===
  "Tu búsqueda no ha obtenido resultados"
) {
  window.close();
}
