'use strict';

const population = [...document.querySelectorAll('.population')].map(
  (elem) => +elem.textContent.replace(/\D/g, ''),
);

const totalPopulation = population.reduce((a, b) => a + b, 0);

document.querySelector('.total-population').textContent =
  totalPopulation.toLocaleString('en-US');

document.querySelector('.average-population').textContent = Math.floor(
  totalPopulation / population.length,
)
  .toLocaleString('en-US')
  .replace('.', ',');
