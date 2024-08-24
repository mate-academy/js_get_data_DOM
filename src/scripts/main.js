'use strict';

const population = [...document.querySelectorAll('.population')];

const convertedPopulation = population.map((populations) => {
  return Number(populations.textContent.replaceAll(',', ''));
});

const totalPopulation = convertedPopulation.reduce((sum, p) => {
  return sum + p;
}, 0);

const avgPopulation = totalPopulation / convertedPopulation.length;

document.querySelector('.total-population').textContent =
  totalPopulation.toLocaleString('en-US');

document.querySelector('.average-population').textContent =
  avgPopulation.toLocaleString('en-US');
