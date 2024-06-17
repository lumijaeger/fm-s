// ==UserScript==
// @name           MILANUNCIOS-imagenes
// @match          https://images.milanuncios.com/api/v1/ma-ad-media-pro/images/*avif
// @match          https://images.milanuncios.com/api/v1/ma-ad-media-pro/images/*
// @match          https://img.milanuncios.com/*.jpg*
// @version        1.1.0
// ==/UserScript==

let dire = window.location.href.replace(/avif$/, "jpeg");
dire = dire.replace(/(?<=jpg|avif)\?.*/, '');

if(window.location.href !== dire) window.location.assign(dire);