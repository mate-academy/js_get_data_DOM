'use strict';

const item = document.querySelectorAll('.population');
const newStorke = [...item]
  .map(type => parseInt(type.innerHTML.split(',').join('')));

const itemTotal = newStorke.reduce((a, b) => a + b);
const itemAvarage = itemTotal / newStorke.length;

const totalElement = document.querySelector('.total-population');
const avarageElement = document.querySelector('.average-population');

totalElement.textContent = itemTotal.toLocaleString('en-US');
avarageElement.textContent = itemAvarage.toLocaleString('en-US');
