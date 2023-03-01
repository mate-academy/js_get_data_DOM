'use strict';

const item = document.querySelectorAll('.population');
const newStorke = [...item]
  .map(type => type.innerHTML)
  .map(type => parseInt(type.split(',').join('')));

const itemTotal = newStorke.reduce((a, b) => a + b);
const itemAvarage = itemTotal / newStorke.length;

const newTotal = document.querySelector('.total-population');
const newAvarage = document.querySelector('.average-population');

newTotal.textContent = itemTotal.toLocaleString('en-US');
newAvarage.textContent = itemAvarage.toLocaleString('en-US');
