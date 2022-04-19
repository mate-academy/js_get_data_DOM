'use strict';

const populations = document.querySelectorAll('.population');
const values = [...populations]
  .map(population => +population.textContent.split(',').join(''));
const total = values.reduce((prev, current) => prev + current, 0);
const average = total / values.length;

document.querySelector('.total-population').textContent
  = total.toLocaleString('en-US');

document.querySelector('.average-population').textContent
  = average.toLocaleString('en-US');
