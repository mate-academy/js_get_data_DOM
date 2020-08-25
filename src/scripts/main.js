'use strict';

const countriesPopulation = document.querySelectorAll('.population');

const splittedPopulations = [...countriesPopulation]
  .map(item => Number(item.innerText.split(',').join('')));

const total = splittedPopulations.reduce((sum, current) => sum + current);

const average = splittedPopulations
  .reduce((sum, current) => sum + current) / splittedPopulations.length;

document.querySelector('.total-population')
  .replaceWith(total.toLocaleString('en-US'));

document.querySelector('.average-population')
  .replaceWith(average.toLocaleString('en-US'));
