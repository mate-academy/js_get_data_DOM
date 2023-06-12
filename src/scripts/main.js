'use strict';

const population = [...document.body.querySelectorAll('.population')]
  .map(item => +item.textContent.replace(/,/g, ''));
const totalPopulation = population.reduce((sum, current) => sum + current, 0);
const averagePopulation = totalPopulation / population.length;

document.body.querySelector('.total-population').textContent
  = totalPopulation.toLocaleString('en-US');

document.body.querySelector('.average-population').textContent
  = averagePopulation.toLocaleString('en-US');
