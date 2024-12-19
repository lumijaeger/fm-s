// ==UserScript==
// @name           VALLADOLIDCITAS-perfil
// @match          https://www.valladolidcitas.es/*
// @match          https://www.valladolidcitas.com/*
// @match          https://www.bilbaocitas.es/*
// @match          https://www.bilbaocitas.com/*
// @match          https://www.gijoncitas.com/*
// @match          https://www.mallorca69.com/*
// @match          https://www.santandercitas.com/*
// @match          https://www.vigocitas.com/*
// @match          https://www.madrid69.com/*
// @match          https://www.zaragoza69.com/*
// @match          https://www.sansebastian69.com/*
// @match          https://www.toledocitas.com/*
// @match          https://www.murciacitas.com/*
// @match          https://www.alicante69.com/*
// @match          https://www.xn--coruacitas-w9a.com/*
// @match          https://www.valenciacitas.com/*
// @match          https://www.cordoba69.com/*
// @match          https://www.vitoriacitas.com/*
// @match          https://www.oviedo69.es/*
// @match          https://www.burgos69.com/*
// @version        1.1.1
// @run-at         document_end
// @require        UtilitiesPack
// ==/UserScript==

Array.from(document.images).forEach((e) => {
  e.removeAttribute("srcset");
  e.src = e.src?.replace(/\?width=480&optimizer=image|&blur=\d+/g, "");
});
replaceAllPhoneLinksWithGoogle();
