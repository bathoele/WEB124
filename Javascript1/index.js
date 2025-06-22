// Brendan Thoele, 06.21.2025

const nav = document.querySelector('#main');
const back = document.getElementById('back');
const logo = document.querySelector('.logo');
const topOfNav = nav.offsetTop;

function fixNav() {
  if (window.scrollY >= topOfNav) {
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove('fixed-nav');
  }

  /* These changes slowly increase the opacity and size of the background image as you progress through the story
  I thought that it could make the story more immersive when reading (if it weren't just Lorem ipsum) */
  back.style.backgroundSize = `${((window.pageYOffset) / document.body.offsetHeight) * 10 + 100}%`;
  back.style.opacity = (window.pageYOffset + 1500) / document.body.offsetHeight;
}

window.addEventListener('scroll', fixNav);