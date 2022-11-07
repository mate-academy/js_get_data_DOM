'use strict';

const populationCollection = document.querySelectorAll('span.population');

const allPopulation = Array.from(populationCollection)
  .map(population => population.innerText)
  .map(population => population.replaceAll(',', ''))
  .map(Number)
  .reduce((sum, item) => sum + item, 0);
const averagePopulation = allPopulation / populationCollection.length;

document.querySelector('span.average-population')
  .innerText = averagePopulation.toLocaleString('en-US');

document.querySelector('span.total-population')
  .innerText = allPopulation.toLocaleString('en-US');
