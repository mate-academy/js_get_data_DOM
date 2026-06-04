'use strict';

const populationElements = document.querySelectorAll('.population');
const population = Array.from(populationElements).map((element) => {
  return parseInt(element.textContent.replace(/,/g, ''), 10);
});

const total = population.reduce((sum, current) => sum + current, 0);

const average = Math.round(total / population.length);

document.querySelector('.total-population').textContent =
  total.toLocaleString();

document.querySelector('.average-population').textContent =
  average.toLocaleString();
