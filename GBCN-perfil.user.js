/*
==UserScript==
@name           GBCN-perfil 1.0
@match          https://www.girlsmadrid.com/escort*
@match          https://web.archive.org/web/*/http://www.girlsmadrid.com/escort*
@match          https://web.archive.org/web/*/https://www.girlsmadrid.com/escort*
@match          https://www.girlsbarcelona.com/escort*
@match          https://web.archive.org/web/*/http://www.girlsbarcelona.com/escort*
@match          https://web.archive.org/web/*/https://www.girlsbarcelona.com/escort*
@match          https://www.girlsbcn.net/gb*
@match          https://web.archive.org/web/*/http://www.girlsbcn.net/gb*
@match          https://web.archive.org/web/*/https://www.girlsbcn.net/gb*
@version        1.2
==/UserScript==
*/

/*ToDo
- Eliminar las restricciones a la selección y el botón secundario
 */

// Teléfono sin guiones y convertirlo en enlace a Google
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