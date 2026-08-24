'use strict';

const populationArr = [...document.querySelectorAll('.population')]
  .map((el) => el.textContent.replace(/,/g, ''))
  .map(Number);
const populationTotal = populationArr.reduce((a, b) => a + b, 0);
const populationAverage = populationTotal / populationArr.length;

document.querySelector('.total-population').textContent =
  populationTotal.toLocaleString();

document.querySelector('.average-population').textContent =
  populationAverage.toLocaleString();
