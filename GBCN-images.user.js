/*
==UserScript==
@name           GBCN-images 1.1
@match          https://*.gbcnmedia.net/*/001.jpg
@version        1.1
==/UserScript==
*/

/* ToDo
- adaptar las fotos con direcciones antiguas como:
    http://fotos0.girlsbcn.net/larissa6/larissa01.jpg
a este
    https://media0.gbcnmedia.net/larissa6/larissa01.jpg
- Buscarlas también en wayback (hay que cambiar el número del principio y buscarlas en varios formatos)
*/
let re = /(?<dire>.*?.net\/(?<nombre>[a-zA-Z]*)\d{0,3}\/)(?<foto>(?:\k<nombre>)?\d{1,3})(?<ext>.*)/;
let dire = window.location.href;
let matches = dire.match(re);
let dires = Array();
let i = 0;
let malas = 0;

if ((/0?01/).test(matches.groups.foto) < 3) {
  //dire = dire.replace(re,"$<dire>$<nombre>01.jpg");
  dire = dire.replace(re,"$<dire>$<nombre>");
}

do {
  (function(){
    i++
    let numero = i.toString().padStart(2,0);
    let direCompleta = `${dire}${numero}.jpg`;
    let request = new XMLHttpRequest();
    request.open('GET', direCompleta, false);
    request.onreadystatechange = function(){
      if (request.readyState === 4){
        if (request.status === 200) {
          dires.push(direCompleta);
          malas = 0;
          return
        }
        malas++;
      }
    };
    request.send();
    console.log(i+": "+malas);
  })();
} while (malas < 40)

if (dires.length > 0) {
  while (document.body.childElementCount > 0) document.body.childNodes[0].remove();

  let style = document.createElement('style');
  style.appendChild(document.createTextNode(`
    ul {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      align-content: stretch;
      row-gap: 10px;
      column-gap: 20px;
      list-style: none
    }
    body {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      align-items: stretch;
      row-gap: 20px;
      list-style: none
    }
    li {
      max-height: 90vh;
      min-height: 50vh;
      flex-shrink: 3;
      flex-basis: auto
    }
    img {
      object-fit: contain;
      position: initial;
      height: 75vh;
      flex: 1 1 auto
    }
    .grande {
      height: 100vh;
      width: 100vw;
      max-height: 100vh;
      max-width: 100vw;
      flex: 0;
    }
}
    `));
  document.head.appendChild(style);

  dires.forEach((direCompleta) => {
    let img = document.createElement("img");
    img.src = direCompleta;
    img.addEventListener("click", (e) => {
      img.classList.toggle("grande");
      img.scrollIntoView();
    });
    img = document.body.appendChild(img);
  });
}