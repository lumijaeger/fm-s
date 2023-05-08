/*
==UserScript==
@name           GBCN-images 3.1
@match          https://*.gbcnmedia.net/*.jpg
@match          http://*.girlsbcn.net/*.jpg
@version        3.1
==/UserScript==
*/

/* ToDo
- que según las va encontrando las vaya incluyendo en la web
- Buscarlas también en wayback (hay que cambiar el número del principio y buscarlas en varios formatos)
*/

let dire = window.location.href.replace(/fotos(\d)\.girlsbcn(.*)/,
                                        (match, p1, p2) => {
  if (match) window.location.assign(`https://media${p1}.gbcnmedia${p2}`);
});

let re = /(?<dire>.*?.net\/(?<nombre>[a-zA-Z]*)\d{0,3}\/)(?<foto>(?:\k<nombre>)?\d{1,3})(?<ext>.*)/;
let matches = dire.match(re);
let dires = Array();
let i = 0;
let malas = 0;
let pad = 2;

if ((/0?01/).test(matches.groups.foto) < 3) {
  dire = dire.replace(re,"$<dire>$<nombre>");
}

for (let j = 0; j < 2; j++) {
  do {
    (function(){
      i++;
      let numero = i.toString().padStart(pad,0);
      let direCompleta = `${dire}${numero}.jpg`;
      let request = new XMLHttpRequest();
      request.open('GET', direCompleta, false);
      request.onreadystatechange = function(){
        if (request.readyState === 4){
          if (request.status === 200) {
            dires.push(direCompleta);
            malas = 0;
            return;
          }
          malas++;
        }
      };
      request.send();
      console.log(i+": "+malas);
    })();
  } while (malas < 40);
  dire = window.location.href.replace(re,"$<dire>");
  malas = 0;
  i = 0;
  pad = 3;
}
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
    img.addEventListener("click", () => {
      img.classList.toggle("grande");
      img.scrollIntoView();
    });
    img = document.body.appendChild(img);
  });
}