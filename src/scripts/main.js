'use strict';

const populationIsCountrys = [...document.querySelectorAll('.population')];
const totalPopulation = populationIsCountrys
  .map(item => +item.textContent.split(',').join(''))
  .reduce((sum, item) => sum + item, 0);
const averagePopulation = totalPopulation / populationIsCountrys.length;

document.querySelector('.total-population')
  .textContent = totalPopulation.toLocaleString('en');

document.querySelector('.average-population')
  .textContent = averagePopulation.toLocaleString('en');
