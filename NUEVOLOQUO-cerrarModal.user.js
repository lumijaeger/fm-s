// ==UserScript==
// @name           NUEVOLOQUO-cerrarModal
// @updateURL      https://raw.githubusercontent.com/lumijaeger/fm-s/refs/heads/main/NUEVOLOQUO-cerrarModal.user.js
// @match          https://www.nuevoloquo.com/*
// @match          https://www.nuevoloquo.ch/*
// @version        1.0
// ==/UserScript==

const observerNoScroll = new MutationObserver((mutations, obs) => {
  mutations.forEach((mutation) => {
    if (/body-no-scroll/.test(mutation.target.className)) {
      console.log(mutation.target);
      mutation.target.classList.remove("body-no-scroll");
      obs.disconnect();
      return;
    }
  });
});

observerNoScroll.observe(document.getElementsByTagName("html")[0], {
  childList: true,
  subtree: true,
  attributeFilter: ["classList"],
});

const observerModal = new MutationObserver((mutations, obs) => {
  mutations.forEach((mutation) => {
    if (/modal-wrapper/.test(mutation.addedNodes[0].id)) {
      mutation.addedNodes[0].remove();
      obs.disconnect();
      return;
    }
  });
});

observerModal.observe(document.getElementsByTagName("html")[0], {
  childList: true,
  subtree: true,
});
