'use strict';

let totalPopulation = 0;

const population = document.getElementsByClassName('population');

for (let i = 0; i < population.length; i++) {
  const populationNumber = parseInt(
    population[i].textContent.split(',').join(''),
  );

  totalPopulation += populationNumber;
}

document.getElementsByClassName('total-population')[0].textContent =
  totalPopulation.toLocaleString();

document.getElementsByClassName('average-population')[0].textContent =
  Math.round(totalPopulation / population.length).toLocaleString();
