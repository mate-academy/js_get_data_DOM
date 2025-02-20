'use strict';

const populationElements = [...document.querySelectorAll('.population')];

const population = populationElements.map(
  (el) => +el.textContent.replaceAll(',', ''),
);

const total = population.reduce((sum, num) => sum + num, 0);

const average = total / populationElements.length;

document.querySelector('.total-population').textContent =
  total.toLocaleString('en-US');

document.querySelector('.average-population').textContent =
  average.toLocaleString('en-US');
