/* eslint-disable prettier/prettier */
/* eslint-disable max-len */
'use strict';

let totalPopulation = 0;

const population = document.getElementsByClassName('population');

for (let i = 0; i < population.length; i++) {
  const populationValue = parseInt(population[i].textContent.split(',').join(''));

  totalPopulation += populationValue;
}

document.getElementsByClassName('total-population')[0].textContent =
  totalPopulation.toLocaleString();

document.getElementsByClassName('average-population')[0].textContent = (
  totalPopulation / population.length
).toLocaleString();
