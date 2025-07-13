const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.add('active');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.add('active');
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = x - startX;
  slider.scrollLeft = scrollLeft - walk;
});

/* Added an event listener on double click, adds the cover class
 I didn't have enough time to make it exclusive to one card at a time, so you can click as many as you want--it gets messy */

document.querySelectorAll('.item').forEach(item => {
  item.addEventListener('dblclick', (e) => {
    item.classList.toggle('cover');
  });
});