'use strict';

const populationElements = document.querySelectorAll('span.population');

const population = Array.from(populationElements).map((number) => {
  return parseInt(number.textContent.replace(/,/g, ''));
});

const total = population.reduce((sum, value) => sum + value, 0);

const average = Math.round(total / population.length);

document.querySelector('span.average-population').textContent =
  average.toLocaleString();

document.querySelector('span.total-population').textContent =
  total.toLocaleString();
