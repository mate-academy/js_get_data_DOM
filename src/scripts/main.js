'use strict';

const population = [...document.querySelectorAll('.population')];

const values = population.map((el) => +el.textContent.replaceAll(',', ''));
const total = values.reduce((sum, el) => sum + el, 0);

const average = total / values.length;

document.querySelector('.total-population').textContent =
  total.toLocaleString('en-US');

document.querySelector('.average-population').textContent =
  average.toLocaleString('en-US');
