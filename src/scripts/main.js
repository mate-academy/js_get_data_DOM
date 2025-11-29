'use strict';

const populationElements = document.querySelectorAll('.population');

const population = Array.from(populationElements).map((el) => {
  return Number(el.textContent.replace(/,/g, ''));
});

const total = population.reduce((sum, n) => sum + n, 0);

let average = 0;

if (population.length > 0) {
  average = total / population.length;
}

document.querySelector('.total-population').textContent =
  total.toLocaleString('en-US');

document.querySelector('.average-population').textContent =
  average.toLocaleString('en-US');
