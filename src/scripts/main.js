'use strict';

const list = document.querySelectorAll('.population');
const texts = [...list].map(item => item.innerText);
const numbers = texts.map(str => +str.split(',').join(''));
const total = numbers.reduce((sum, n) => sum + n, 0);
const everage = total / numbers.length;

document.querySelector('.total-population').textContent
  = total.toLocaleString();

document.querySelector('.average-population').textContent
  = everage.toLocaleString();
