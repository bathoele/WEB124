// Brendan Thoele, 07.21.2025

const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
const slider = document.getElementById('slider');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 75;
ctx.globalCompositeOperation = 'xor';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

// Added three functions for the editing menu

slider.oninput = function () {
  ctx.lineWidth = this.value;
}

function changeEffect (effect) {
  ctx.globalCompositeOperation = effect;
}

function reset () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function draw(e) {
  if (!isDrawing) return;
  
  ctx.strokeStyle = `hsl(${hue}, 50%, 50%)`;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
  hue++;
  if (hue >= 360) {
    hue = 0;
  }

}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);