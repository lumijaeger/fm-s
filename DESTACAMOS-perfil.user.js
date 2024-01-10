/*
==UserScript==
@name           DESTACAMOS-perfil
@match          https://www.destacamos.com/*/details.html
@version        1.0
==/UserScript==
*/

const phoneLink = document.querySelector('div#details div:first-child strong a');
const googleLink = document.createElement('a');
const googleIcon = googleLink.appendChild(document.createElement('img'));

googleLink.href = 'https://www.google.com/search?q=' + phoneLink.innerText;
googleLink.target = '_blank';

googleIcon.src = "https://cdn.iconscout.com/icon/free/png-256/free-google-1772223-1507807.png"
googleIcon.style = "height: 12px; margin-left: 5px"

phoneLink.href =
  'https://www.destacamos.com/keyword-'
  + phoneLink.innerText
  + '/listings.html';

phoneLink.insertAdjacentElement('afterend', googleLink);

/*
 * phoneLink.onclick = () => window.open(
  'https://www.google.com/search?q=' + phoneLink.innerText,
  '_blank'
  );
 *
 * phoneLink.onauxclick = (e) => {
  if (e.button === 1) {
    window.open(
      'https://www.google.com/search?q=' + phoneLink.innerText,
      '_blank'
    );
  }
};*/