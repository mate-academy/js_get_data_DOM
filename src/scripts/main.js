'use strict';

const population = [...document.querySelectorAll('.population')]
  .map(value => +value.innerHTML.replaceAll(',', ''));

const total = population.reduce((prev, cur) => prev + cur);
const average = (total / population.length);

document.querySelector('.total-population').textContent
  = total.toLocaleString('en-US');

document.querySelector('.average-population').textContent
  = average.toLocaleString('en-US');
