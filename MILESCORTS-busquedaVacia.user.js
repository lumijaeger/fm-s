// ==UserScript==
// @name           MILESCORTS-busquedaVacia
// @updateURL      https://raw.githubusercontent.com/lumijaeger/fm-s/refs/heads/main/MILESCORTS-busquedaVacia.user.js
// @match          https://www.milescorts.es/escorts-y-putas/?s=*
// @version        1.0
// ==/UserScript==

if (
  document
    .getElementById("container")
    .textContent.includes(
      "No se han encontrado anuncios publicados en esta localidad y categoría"
    )
)
  window.close();
