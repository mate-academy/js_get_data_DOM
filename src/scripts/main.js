'use strict';

const populations = document.querySelectorAll('.population');

const totalPopulation = [...populations].reduce((sum, population) => {
  return sum + Number(population.textContent.replaceAll(',', ''));
}, 0);

const averagePopulation = populations.length
  ? Math.round(totalPopulation / populations.length)
  : 0;

document.querySelector('.total-population').textContent =
  totalPopulation.toLocaleString('en-US');

document.querySelector('.average-population').textContent =
  averagePopulation.toLocaleString('en-US');
