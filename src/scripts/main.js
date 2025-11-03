'use strict';

const populationValues = [...document.querySelectorAll('.population')]
  .map((el) => el.textContent.split(',').join(''))
  .map((str) => Number(str))
  .filter((num) => !isNaN(num));

const sum = populationValues.reduce((acc, val) => acc + val, 0);
const average = Math.round(sum / populationValues.length);

document.querySelector('.total-population').textContent =
  sum.toLocaleString('en-US');

document.querySelector('.average-population').textContent =
  average.toLocaleString('en-US');
