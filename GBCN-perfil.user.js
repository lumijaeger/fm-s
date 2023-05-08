/*
==UserScript==
@name           GBCN-perfil
@match          https://www.girlsmadrid.com/escort*
@match          https://web.archive.org/web/*/http://www.girlsmadrid.com/escort*
@match          https://web.archive.org/web/*/https://www.girlsmadrid.com/escort*
@match          https://www.girlsbarcelona.com/escort*
@match          https://web.archive.org/web/*/http://www.girlsbarcelona.com/escort*
@match          https://web.archive.org/web/*/https://www.girlsbarcelona.com/escort*
@match          https://www.girlsbcn.net/gb*
@match          https://web.archive.org/web/*/http://www.girlsbcn.net/gb*
@match          https://web.archive.org/web/*/https://www.girlsbcn.net/gb*
@version        2.0.0
==/UserScript==
*/

/*ToDo
- Cambiar el teléfono por un enlace que abra búsquedas en las webs habituales
- Eliminar las restricciones a la selección y el botón secundario
 */

// Teléfono sin guiones
const elements = document.getElementsByClassName('telefono');

if (elements.length > 0) {
  const phone = elements[1].innerText.replaceAll('-', '');
  Array.from(elements).forEach((e) => {
    if (e.children.length > 0) {
      e.firstElementChild.setAttribute('href', `https://www.google.com/search?&q=${phone}`);
      e.firstElementChild.innerText = phone;
    } else {
      const newLink = document.createElement('a');
      e.innerText = null;
      newLink.innerText = phone;
      newLink.setAttribute('href', `https://www.google.com/search?&q=${phone}`);
      newLink.setAttribute('rel', "noreferrer noopener");
      newLink.setAttribute('target', "_blank");
      e.appendChild(newLink);
    }
  });
}

// Nombre de la puta seleccionable
let encabezado = document.getElementsByClassName("heading")[0];
encabezado.style.position = "relative";
encabezado.style.zIndex = "1000000";

// Galería completa
  // wrapper de las fotos
let grid = document.getElementyById('grid');
  // posición a izquierda y derecha
let parImpar = ['15px','550px'];

let chino = 0;
if (chino ^ 1) chino = 1;

  // cambiar el tamaño del wrapper
let currentHeight = current.offsetHeight;
if (currentHeight > tallerHeight) tallerHeight = currentHeight;
grid.style.height = grid.style.height + tallerHeight;