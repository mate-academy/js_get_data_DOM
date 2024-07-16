'use strict';

const populationDataArr = [...document.querySelectorAll('.population')].map(
  (el) => +el.innerText.split(',').join(''),
);

const total = populationDataArr.reduce(
  (sum, population) => sum + population,
  0,
);

const average = total / populationDataArr.length;

document.querySelector('.total-population').textContent =
  total.toLocaleString('en-US');

document.querySelector('.average-population').textContent =
  average.toLocaleString('en-US');
