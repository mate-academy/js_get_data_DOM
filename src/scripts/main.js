'use strict';

const listPopulation = document.querySelectorAll('.population');
const listNumber = [...listPopulation].map(item =>
  +item.textContent.split(',').join(''));
const total = listNumber.reduce((a, b) => a + b, 0);

document.querySelector('.total-population').replaceWith(
  total.toLocaleString('en-US'));

document.querySelector('.average-population').replaceWith(
  (total / listPopulation.length).toLocaleString('en-US'));
