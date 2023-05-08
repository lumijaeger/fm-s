/*
==UserScript==
@name           MILANUNCIOS-imgConversor
@match          https://images.milanuncios.com/api/v1/ma-ad-media-pro/images/*avif
@version        1.0
==/UserScript==
*/

let dire = window.location.href.replace(/avif$/, "jpeg")
window.location.assign(dire);