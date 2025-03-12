'use strict';

const population = document.querySelectorAll('.population');
const populationValues = Array.from(population).map((countryPopulation) =>
  parseInt(countryPopulation.textContent.replaceAll(',', '')),);

const total = populationValues.reduce((sum, value) => sum + value, 0);
const average = total / populationValues.length;

document.querySelector('.average-population').textContent =
  average.toLocaleString('en-US');

document.querySelector('.total-population').textContent =
  total.toLocaleString('en-US');
