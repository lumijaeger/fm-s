// ==UserScript==
// @name           SLUMI-redirecScompi
// @updateURL      https://raw.githubusercontent.com/lumisjaeger/fm-s/refs/heads/master/SLUMI-redirecScompi.user.js
// @match          https://www.slumi.com/
// @match          https://www.slumi.com/*
// @version        1.0
// ==/UserScript==

window.location.replace(location.href.replace("slumi", "scompi"));
