'use strict';

// write your code here
const list = document.querySelectorAll('.population');

const populationNumber = [...list].map(item =>
  +item.textContent.replaceAll(',', ''));

const total = populationNumber.reduce((sum, x) => sum + x, 0);
const average = total / populationNumber.length;

document.querySelector('.total-population').textContent
  = total.toLocaleString('en-US');

document.querySelector('.average-population').textContent
  = average.toLocaleString('en-US');
