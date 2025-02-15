// ==UserScript==
// @name           SEXOMERCADO-busquedaVacia
// @updateURL      https://raw.githubusercontent.com/lumijaeger/fm-s/refs/heads/main/SEXOMERCADO-busquedaVacia.user.js
// @match          https://www.sexomercadobcn.com/search.php?query=*
// @match          https://www.sexomercadomadrid.com/search.php?query=*
// @match          https://www.sexomercadospain.com/search.php?query=*
// @version        1.0
// ==/UserScript==

if (document.getElementsByClassName("search-results-posts").length === 0) {
  window.close();
}
