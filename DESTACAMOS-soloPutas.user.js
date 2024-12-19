// ==UserScript==
// @name           DESTACAMOS-soloPutas
// @updateURL      https://raw.githubusercontent.com/lumisjaeger/fm-s/refs/heads/master/DESTACAMOS-soloPutas.user.js
// @match          https://www.destacamos.com/*/listings.html
// @match          https://www.destacamos.net/*/listings.html
// @version        1.0.0
// ==/UserScript==

[
  ...document.querySelectorAll(
    'div#featured div[aria-roledescription="slide"].item.splide__slide:has(' +
      'div.box-image > :is(a[href*="travestis"], a[href*="chaperos"]))'
  ),
  ...document.querySelectorAll(
    'div#right_content > div[id]:has(:is(a[href*="travestis"], a[href*="chaperos"]))'
  ),
].forEach((e) => e.remove());
