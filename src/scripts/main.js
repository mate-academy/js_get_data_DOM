'use strict';

const population = [...document.querySelectorAll('.population')]
  .map(item => +item.textContent.replace(/,/g, ''));
const totalPopulation = population.reduce((acc, cur) => acc + cur, 0);
const averagePopulation = totalPopulation / population.length;

document.querySelector('.total-population').textContent
  = totalPopulation.toLocaleString('en-US');

document.querySelector('.average-population').textContent
  = averagePopulation.toLocaleString('en-US');
