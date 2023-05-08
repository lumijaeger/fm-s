/*
==UserScript==
@name           PUTALOCURA-busquedaVacia
@match          https://foropl.com/search/*
@version        1.0
==/UserScript==
*/

setTimeout(() => {
  if (document.getElementsByClassName("blockMessage").length > 0) {
    window.close();
  }
}, 1000);