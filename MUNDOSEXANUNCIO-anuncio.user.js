/*
==UserScript==
@name           MUNDOSEXANUNCIO-anuncio
@match          https://www.mundosexanuncio.com/putas/*
@version        1.0
==/UserScript==
*/

let phone = document.querySelector('address.fa_tel p.tel a span');
phone.innerText = phone.innerText.replaceAll(" ", "");