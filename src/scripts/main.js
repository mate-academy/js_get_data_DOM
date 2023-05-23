'use strict';

const populationInfo = document.querySelectorAll('.population');

const countryPopulations = [...populationInfo]
  .map(population => +population.textContent.replaceAll(',', ''));

const totalSum = countryPopulations.reduce((sum, x) => sum + x, 0);

const averageValue = (totalSum / countryPopulations.length);

document.querySelector('.total-population')
  .textContent = totalSum.toLocaleString('en-us');

document.querySelector('.average-population')
  .textContent = averageValue.toLocaleString('en-US');
