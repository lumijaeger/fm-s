// ==UserScript==
// @name           LOQUOSEX-busqueda
// @updateURL      https://raw.githubusercontent.com/lumijaeger/fm-s/refs/heads/main/LOQUOSEX-busqueda.user.js
// @match          https://www.loquosex.com/?s=*
// @version        1.0
// ==/UserScript==

if (document.querySelector("section.error-caja") !== null) window.close();
