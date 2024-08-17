// ==UserScript==
// @name           DESTACAMOS-perfil
// @match          https://www.destacamos.com/*/details.html
// @match          https://www.destacamos.net/*/details.html
// @require        UtilitiesPack
// @version        1.1
// ==/UserScript==

const phoneLink = document.querySelector('div#details div:first-child strong a');
const googleLink = document.createElement('a');
const allButton = document.createElement('button');
const googleIcon = googleLink.appendChild(document.createElement('img'));

googleLink.href = 'https://www.google.com/search?q=' + phoneLink.innerText;
googleLink.target = '_blank';
googleLink.onclick = () => copyToClipboard(phoneLink.innerText);

googleIcon.src = "https://cdn.iconscout.com/icon/free/png-256/free-google-1772223-1507807.png";
googleIcon.style = "height: 12px; margin-left: 5px";

phoneLink.href =
  'https://www.destacamos.com/keyword-' +
  phoneLink.innerText +
  '/listings.html';
phoneLink.onclick = () => copyToClipboard(phoneLink.innerText);

allButton.addEventListener('click', () => {
  copyToClipboard(phoneLink.innerText);
  window.open(
    'https://www.destacamos.com/keyword-' + phoneLink.innerText + '/listings.html',
    '_blank'
  );
  window.open(
    'https://www.google.com/search?q=' + phoneLink.innerText,
    '_blank'
  );
  window.close();
});

allButton.addEventListener('mousedown', (e) => {
  if (e.button === 1) e.preventDefault();
});

allButton.addEventListener('auxclick', (e) => {
  if (e.button === 1) {
    copyToClipboard(phoneLink.innerText);
    e.preventDefault();
    e.stopPropagation();
    window.open(
      'https://www.destacamos.com/keyword-' + phoneLink.innerText + '/listings.html',
      '_blank'
    );
    window.open(
      'https://www.google.com/search?q=' + phoneLink.innerText,
      '_blank'
    );
  }
});

allButton.innerText = 'TODO';
allButton.style = 'padding: 3px 4px 0px; border-radius: 8px; font-size: 12px';

phoneLink.insertAdjacentElement('afterend', allButton);
phoneLink.insertAdjacentElement('afterend', googleLink);