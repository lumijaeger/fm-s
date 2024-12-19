// ==UserScript==
// @name           GBCN-novedades
// @updateURL      https://raw.githubusercontent.com/lumisjaeger/fm-s/refs/heads/master/GBCN-novedades.user.js
// @match          https://www.girlsbarcelona.com/news
// @match          https://www.girlsbarcelona.com/novedades-pagina-*
// @match          https://www.girlsmadrid.com/news
// @match          https://www.girlsmadrid.com/novedades-pagina-*
// @version        1.3
// @run-at         document_idle
// ==/UserScript==

let enanas = document.querySelectorAll("a[href='tag-escorts-bajitas.html']");
enanas.forEach(
  (cuadro) =>
    (cuadro.parentElement.parentElement.parentElement.style.backgroundColor =
      "darkolivegreen")
);

let gigantes = document.querySelectorAll("a[href='tag-escorts-altas.html']");
gigantes.forEach(
  (cuadro) =>
    (cuadro.parentElement.parentElement.parentElement.style.backgroundColor =
      "darkgoldenrod")
);

let agencias = document.querySelectorAll(
  "a[href='tag-escorts-de-agencia.html']"
);
agencias.forEach((cuadro) => {
  cuadro.parentElement.parentElement.parentElement.style.visibility = "hidden";
  cuadro.parentElement.parentElement.parentElement.getElementsByTagName(
    "h4"
  )[0].style.visibility = "visible";
});
