/*
==UserScript==
@name           GBCN-noticias
@match          https://www.girlsbarcelona.com/noticias
@match          https://www.girlsmadrid.com/noticias
@version        1.1
==/UserScript==
*/

let borrar = /agencia|pr[óo]ximamente|disponible( en \w+?)? a partir|nueva anunciante|Deja \w+? (?:por unos días|hasta su próxima visita)/i;
let rojo = /No disponible|temporada/i;
let amarillo = /traslada|De nuevo (?:disponible|anunciada)|Deja \w+? y (?:de nuevo|ahora) (?:disponible|anunciada)/i;
let verde = /foto|v[íi]deo|actualiza|presenta/i;
let tarjetas = Array.from(document.getElementsByClassName("services-box"));

for (let i = tarjetas.length - 1; i >= 0; i--) {
  let texto = tarjetas[i].getElementsByTagName("p")[0].innerText;
  if (borrar.test(texto)) {
    tarjetas[i].remove();
    tarjetas.pop();
  } else if (verde.test(texto)) {
    tarjetas[i].style.backgroundColor = "darkolivegreen";
  } else if (amarillo.test(texto)) {
    tarjetas[i].style.backgroundColor = "darkgoldenrod";
    tarjetas[i].getElementsByTagName("p")[0].style.color = "white";
  } else if (rojo.test(texto)) {
    tarjetas[i].style.backgroundColor = "darkred";
  }
}