'use strict';

const population = [...document.querySelectorAll('.population')];
const totalPopulation = population.reduce((sum, current) =>
  sum + (+current.innerText.split('').filter(value =>
    Number.isInteger(+value)).join('')), 0);
const averagePopulation = totalPopulation / population.length;

document
  .querySelector('.total-population')
  .innerText = totalPopulation.toLocaleString();

document
  .querySelector('.average-population')
  .innerText = averagePopulation.toLocaleString();
