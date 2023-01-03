'use strict';

const population = document.querySelectorAll('span.population');
const total = [...population].reduce((sum, span) =>
  sum + +span.innerHTML.split(',').join(''), 0);

const average = Math.round(total / population.length);

document.querySelector('.total-population').innerHTML
  = Number(total).toLocaleString();

document.querySelector('.average-population').innerHTML
  = Number(average).toLocaleString();
