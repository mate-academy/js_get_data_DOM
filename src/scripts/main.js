'use strict';

const spans = [...document.querySelectorAll('.population')];

const populationNumber = spans.map(
  (elem) => +elem.textContent.split(',').join(''),
);

const totalPopulation = populationNumber.reduce((accum, num) => accum + num, 0);
const avgpopulation = Math.floor(totalPopulation / populationNumber.length);

document.querySelector('.total-population').textContent =
  totalPopulation.toLocaleString('en-US');

document.querySelector('.average-population').textContent =
  avgpopulation.toLocaleString('en-US');
