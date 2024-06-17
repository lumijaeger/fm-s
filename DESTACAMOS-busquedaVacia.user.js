// ==UserScript==
// @name           DESTACAMOS-busquedaVacia
// @match          http://www.destacamos.com/keyword-*/listings.html
// @version        1.0.1
// ==/UserScript==


let targetPhone = window.location.href.match('\\d{9}')[0];
let phones = document.querySelectorAll('div.detalles span b');

if (!(Array.from(phones).some(tel => tel.innerText === targetPhone))) {
  window.close();
}