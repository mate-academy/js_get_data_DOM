'use strict';

const populationNumbers = [...document.querySelectorAll('.population')].map(
  (element) => parseInt(element.textContent.replaceAll(',', '')),
);
const totalPopulation = populationNumbers.reduce(
  (prev, curr) => prev + curr,
  0,
);
const averagePopulation = populationNumbers.length
  ? totalPopulation / populationNumbers.length
  : 0;

document.querySelector('.total-population').textContent =
  totalPopulation.toLocaleString();

document.querySelector('.average-population').textContent =
  averagePopulation.toLocaleString();
