'use strict';

const populationValues = [...document.querySelectorAll('.population')].map(
  (value) => +value.textContent.split(',').join(''),
);

const totalPopulation = Math.round(
  populationValues.reduce((total, current) => total + current, 0),
);

const averagePopulation = Math.round(totalPopulation / populationValues.length);

document.querySelector('.total-population').textContent =
  totalPopulation.toLocaleString('en-US');

document.querySelector('.average-population').textContent =
  averagePopulation.toLocaleString('en-US');
