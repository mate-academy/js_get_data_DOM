'use strict';

const populationCollection = document.querySelectorAll('span.population');

const allPopulation = Array.from(populationCollection)
  .map(population => Number(population.innerText.replaceAll(',', '')))
  .reduce((sum, item) => sum + item, 0);
const averagePopulation = allPopulation / populationCollection.length;

document.querySelector('span.average-population')
  .innerText = averagePopulation.toLocaleString('en-US');

document.querySelector('span.total-population')
  .innerText = allPopulation.toLocaleString('en-US');
