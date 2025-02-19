'use strict';

const population = [...document.querySelectorAll('.population')];

const populationNumbers = population.map((span) => {
  return parseInt(span.textContent.replace(/,/g, ''), 10) || 0;
});

const totalPopulation = populationNumbers.reduce((a, b) => a + b, 0);

const averagePopulation = totalPopulation / populationNumbers.length;

document.querySelector('.total-population').textContent =
  totalPopulation.toLocaleString();

document.querySelector('.average-population').textContent =
  averagePopulation.toLocaleString();
