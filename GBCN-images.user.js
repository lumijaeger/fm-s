/*
==UserScript==
@name           GBCN-images 5.1
@match          https://*.gbcnmedia.net/*.jpg
@match          http://*.girlsbcn.net/*.jpg
@version        4.3
==/UserScript==
*/

/* ToDo
- Buscarlas también en wayback (hay que cambiar el número del principio y buscarlas en varios formatos)
*/

let dire = window.location.href.replace(/fotos(\d)\.girlsbcn(.*)/,
  (match, p1, p2) => {
    if (match) window.location.assign(`https://media${p1}.gbcnmedia${p2}`);});
let re = /(?<dire>.*?.net\/(?<nombre>[a-zA-Z]*)\d{0,3}\/)(?<foto>(?:\k<nombre>)?\d{1,3})(?<ext>.*)/;
let matches = dire.match(re);
let photos = [];

if ((/0?01/).test(matches.groups.foto) < 3) {
  dire = dire.replace(re, "$<dire>$<nombre>");
}

let style = document.createElement('style');
style.appendChild(document.createTextNode(`
body {
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	align-items: stretch;
	align-content: stretch;
	margin-block: 3vh;
	gap: 1vh 1vw;
}
img {
	position: initial;
	object-fit: contain;
	margin: 0;
	max-height: 95vh;
	flex: 1 1 auto;
}
img.landscape {
	max-width: initial;
}
.original {
	height: initial;
	width: initial;
	max-height: initial;
	max-width: initial;
	flex: 0 0 auto;
  align-self: center;
}
.peque {
	height: 75vh;
	max-height: initial;
	max-width: initial;
	flex: 0
}
`));

(function addImg(pad = 2, malas = 0, i = 1) {
  console.log({
    pad,
    malas,
    i
  });
  let direCompleta = `${dire}${(i.toString().padStart(pad,0))}.jpg`;

  let request = new XMLHttpRequest();
  request.open('GET', direCompleta, false);

  request.onreadystatechange = function() {
    if (request.readyState !== 4 || request.status !== 200) {
      malas++;
      return;
    }
    let img = document.createElement("img");
    img.src = direCompleta;
    img.addEventListener("click", (e) => {
      let targetClassList = e.target.classList;
      targetClassList[(targetClassList.contains("original") ? "remove" : "add")]("original");
    });
		photos = [...photos, img]
  };

  request.send();

  i++;
  if (malas < 40) {
    addImg(pad, malas, i);
    return;
  } else if (pad === 2) {
    dire = window.location.href.replace(re, "$<dire>");
    addImg(3, 0, 1);
  }
})();

document.title = photos.length + " " + matches.groups.nombre;
while (document.body.childElementCount > 0) document.body.childNodes[0].remove();
document.head.appendChild(style);
photos.forEach((e) => {
	document.body.appendChild(e);
	// if (e.height < e.width) {
	// 	e.classList.add("landscape");
	// }
});