// Brendan Thoele, 7.21.2025

const calculate = document.getElementById('calculate');
const input = document.getElementById('num');
const addSection = document.getElementById('addition');
const subSection = document.getElementById('subtraction');
const mulSection = document.getElementById('multiplication');
const divSection = document.getElementById('division');

function add (num) {
  let string = '';
  for (let i = 1; i < 11; i++) {
    string += `<span>${i} + ${num} = ${(Number(num) + i).toFixed(2)}</span><br>`;
  }

  addSection.innerHTML = string;
}

function subtract (num) {
  let string = '';
  let i = 0;
  while (i < 10) {
    i++;
    string += `<span>${i} - ${num} = ${(i - Number(num)).toFixed(2)}</span><br>`;
  }
  
  subSection.innerHTML = string;
}

function multiply (num) {
  let string = '';
  let i = 0;
  do {
    i++;
    string += `<span>${i} x ${num} = ${(i * Number(num)).toFixed(2)}</span><br>`;
  } while (i < 10);
  
  mulSection.innerHTML = string;
}

function divide (num) {
  let string = '';
  let iArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (let i of iArr) {
    string += `<span>${i} / ${num} = ${(i / Number(num)).toFixed(2)}</span><br>`;
  }
  
  divSection.innerHTML = string;
}

calculate.addEventListener('click', () => {
  add(input.value);
  subtract(input.value);
  multiply(input.value);
  divide(input.value);
});