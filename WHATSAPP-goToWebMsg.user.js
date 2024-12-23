// ==UserScript==
// @name           WHATSAPP-goToWebMsg
// @match          https://api.whatsapp.com/send*
// @match          https://web.whatsapp.com/send*
// @run-at         document-start
// @updateURL      https://raw.githubusercontent.com/lumisjaeger/fm-s/refs/heads/master/WHATSAPP-goToWebMsg.user.js
// @version        1.0
// ==/UserScript==

const msg = encodeURIComponent(
  prompt("Message") ||
    "Hola:\n\nHe visto tu anuncio y me gustaría saber si podrías ampliarme un poco la información. Muchas gracias"
);

const URLRegex = new RegExp(
  /https:\/\/api|&/.source +
    "(?!phone=|text=" +
    msg +
    ")" +
    /\w+?|\?phone=[67]\d{8}/.source
);

if (window.location.href.match(URLRegex)) {
  window.location.assign(
    "https://web.whatsapp.com/send/?phone=" +
      decodeURIComponent(window.location.href).replace(
        /.*?\?phone=\D*(.*?.(?=[?&])|.*).*/,
        (match, phoneParam) => {
          const numberResult = phoneParam.replace(/\D/g, "");
          return /^[67]\d{8}$/.test(numberResult)
            ? "34" + numberResult
            : numberResult + "&text=" + msg;
        }
      )
  );
}
