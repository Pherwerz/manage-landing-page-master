import './index.scss';

let tracker = true;
const button = document.querySelector('.header__nav');
const nav = document.querySelector('.navigation');
const image = document.querySelector('#img');
const slides = Array.from(document.querySelectorAll('.review__box'));
const dots = Array.from(document.querySelectorAll('.review__dots'));
let slideIndex = 0;

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

const show = () => {
  slides.forEach((cur, i) => {
    cur.style.display = 'none';
    dots[i].classList.remove('review__dots--active');
  });

  slides[slideIndex].style.display = 'block';
  dots[slideIndex].classList.add('review__dots--active');
  slideIndex++;

  if (slideIndex === 4) slideIndex = 0;
};

if (window.innerWidth <= 600) setInterval(show, 2000);
