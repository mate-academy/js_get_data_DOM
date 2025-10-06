'use strict';

const populationEl = document.querySelectorAll('span.population');
const population = Array.from(populationEl).map((country) => {
  return parseInt(country.textContent.replaceAll(',', ''));
});

const total = population.reduce((sum, value) => sum + value, 0);
const average = Math.round(total / population.length);

document.querySelector('.total-population').textContent =
  total.toLocaleString();

document.querySelector('.average-population').textContent =
  average.toLocaleString();
