// ==UserScript==
// @name           SCOMPI-busquedaVacia
// @updateURL      https://raw.githubusercontent.com/lumijaeger/fm-s/refs/heads/main/SCOMPI-busquedaVacia.user.js
// @match          https://www.scompi.com/espa%C3%B1a/buscar.*
// @version        1.0
// @run-at         document-idle
// ==/UserScript==

console.log(
  getComputedStyle(document.getElementById("sin_resultados")).display
);
console.log(document.getElementById("sin_resultados").style.display);

//if (getComputedStyle(document.getElementById('sin_resultados')).display !== 'none' || document.getElementsByClassName('no_encontrado').length > 0) window.close();
