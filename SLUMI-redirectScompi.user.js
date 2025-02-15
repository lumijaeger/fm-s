// ==UserScript==
// @name           SLUMI-redirecScompi
// @updateURL      https://raw.githubusercontent.com/lumijaeger/fm-s/refs/heads/main/SLUMI-redirecScompi.user.js
// @match          https://www.slumi.com/
// @match          https://www.slumi.com/*
// @version        1.0
// ==/UserScript==

window.location.replace(location.href.replace("slumi", "scompi"));
