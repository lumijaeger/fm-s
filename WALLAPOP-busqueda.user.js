/*
==UserScript==
@name           WALLAPOP-busqueda
@match          https://es.wallapop.com/app/search?*
@version        1.0
==/UserScript==
*/

const observer = new MutationObserver((mutations, obs) => {
  mutations.forEach((mutation) => {
    let currentNode = mutation.addedNodes[0];
    if (/tsl-search-error-layout/i.test(currentNode.nodeName)) {
      window.close();
    }
    if (/ItemCardList__item/i.test(currentNode.className)) {
      obs.disconnect();
      return;
    }
  });
});

observer.observe(document.getElementsByTagName('tsl-root')[0], {childList: true, subtree: true});