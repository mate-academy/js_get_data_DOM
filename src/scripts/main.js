'use strict';

const item = document.querySelectorAll('.population');
const newStorke = [...item]
  .map(type => parseInt(type.innerHTML.split(',').join('')));

const total = newStorke.reduce((a, b) => a + b);
const avarage = total / newStorke.length;

const totalElement = document.querySelector('.total-population');
const avarageElement = document.querySelector('.average-population');

totalElement.textContent = total.toLocaleString('en-US');
avarageElement.textContent = avarage.toLocaleString('en-US');
