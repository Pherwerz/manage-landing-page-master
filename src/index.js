import './index.scss';

let tracker = true;
const button = document.querySelector('.header__nav');
const nav = document.querySelector('.navigation');
const image = document.querySelector('#img');

button.addEventListener('click', () => {
  if (tracker) {
    image.src = './img/icon-close.svg';
    nav.style.visibility = 'visible';
    nav.style.opacity = '1';
    tracker = false;
  } else {
    image.src = './img/icon-hamburger.svg';
    nav.style.visibility = 'hidden';
    nav.style.opacity = '0';
    tracker = true;
  }
});
