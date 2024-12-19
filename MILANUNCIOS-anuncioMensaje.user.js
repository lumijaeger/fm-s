// ==UserScript==
// @name           MILANUNCIOS-anuncioMensaje
// @match          https://www.milanuncios.com/*
// @version        1.0
// ==/UserScript==

/* 
let msg = `Hola:

Soy fotógrafo y estoy en proceso de inaugurar mi nuevo estudio. Estoy buscando a un maquillador/a y un ayudante para ciertas tareas (sobre todo gestión de agenda y trato con modelos/clientes).

Si está interesada no dude en contactar conmigo para ampliar cualquier información.

Atentamente, Juan Manuel`

document.getElementsByClassName('ma-AdContactMessageButton')[0].click();
document.getElementById('message').textContent = msg;
document.getElementsByTagName('form')[0].getElementsByTagName('button')[0].click();


document.getElementsByClassName('ma-AdContactMessageButton')[0].click();

const obMsg = new MutationObserver((mutations, obs) => {
  mutations.forEach((mutation) => {
    if (/video_controles/.test(mutation.addedNodes[0].className)) {
      mutation.addedNodes[0].remove();
      obs.disconnect();
      return;
    }
  });
});

const obSend = new MutationObserver((mutations, obs) => {
  mutations.forEach((mutation) => {
    if (/video_controles/.test(mutation.addedNodes[0].className)) {
      mutation.addedNodes[0].remove();
      obs.disconnect();
      return;
    }
  });
});


const msgButton = document.getElementsByClassName('ma-AdContactMessageButton')[0];


obMsg.observe(msgButton, {childList: true, subtree: true}); */