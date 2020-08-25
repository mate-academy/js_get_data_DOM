'use strict';

const spans = document.querySelectorAll('.population');

const population = [...spans]
  .map(item => Number(item.innerText.split(',').join('')));

const total = population.reduce((sum, current) => sum + current);

const average = population
  .reduce((sum, current) => sum + current) / population.length;

document.querySelector('.total-population')
  .replaceWith(total.toLocaleString('en-US'));

document.querySelector('.average-population')
  .replaceWith(average.toLocaleString('en-US'));
