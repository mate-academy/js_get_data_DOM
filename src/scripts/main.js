'use strict';

const population = [...document.querySelectorAll('.population')]
  .map(item => +item.textContent.split(',').join(''));
const totalPopulation = population.reduce((sum, current) => sum + current, 0);
const averagePopulation = totalPopulation / population.length;

document.querySelector('.total-population')
  .textContent = totalPopulation;

document.querySelector('.average-population')
  .textContent = averagePopulation;
