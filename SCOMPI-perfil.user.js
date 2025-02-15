// ==UserScript==
// @name           SCOMPI-perfil
// @updateURL      https://raw.githubusercontent.com/lumijaeger/fm-s/refs/heads/main/SCOMPI-perfil.user.js
// @match          https://www.scompi.com/*
// @version        1.1
// ==/UserScript==

/* ToDo
- Siguiente foto al hacer click sobre la foto
*/

// Añadir controles normales a la galería de imágenes
document.getElementById("ficha_galeria_prev").style.width = "15%";
document.getElementById("ficha_galeria_prev").style.cursor = "pointer";
document.getElementById("ficha_galeria_next").style.width = "15%";
document.getElementById("ficha_galeria_next").style.cursor = "pointer";
document
  .getElementById("ficha_galeria_image")
  .addEventListener("click", function () {
    document.documentElement.classList.remove("galeriaficha");
  });

// Vídeos
// Añadir controles normales
let videos = document.getElementsByTagName("video");
for (let video of videos) {
  video.setAttribute("controls", true);
}

// Quitar controles mugrosos
const observer = new MutationObserver((mutations, obs) => {
  mutations.forEach((mutation) => {
    if (/video_controles/.test(mutation.addedNodes[0].className)) {
      mutation.addedNodes[0].remove();
      obs.disconnect();
      return;
    }
  });
});

const contenedores = document.querySelectorAll(
  "#ficha_videos .contenedor .video"
);
for (const contenedor of contenedores) {
  observer.observe(contenedor, { childList: true, subtree: true });
}
