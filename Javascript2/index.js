const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 150;

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height} = hero;
  let { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = Math.round((x / width * walk) - (walk / 2));
  const yWalk = Math.round(( y / height * walk) - (walk / 2));

  /* Added blur and blurpx variables to calculate the mouse distance from the center axis */
  let blur = (xWalk * yWalk) / 150;
  let blurpx = blur < 0 ? blur * -1 : blur;

  text.style.textShadow = `${xWalk * -1}px ${yWalk * -1}px ${blurpx}px rgb(148, 62, 62)`;
}

hero.addEventListener('mousemove', shadow);