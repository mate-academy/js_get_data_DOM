'use strict';

const populations = [...document.querySelectorAll('.population')]
  .map(population => +population.innerText.split(',').join(''));

const totalPopulation = populations.reduce((a, b) => a + b);
const averagePopulation = totalPopulation / populations.length;

document
  .querySelector('.total-population')
  .innerText = totalPopulation.toLocaleString('en-GB');

document
  .querySelector('.average-population')
  .innerText = averagePopulation.toLocaleString('en-GB');
