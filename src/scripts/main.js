'use strict';

const populations = document.getElementsByClassName('population');

let total = 0;

for (const population of populations) {
  total += parseFloat(population.innerHTML.replace(/,/g, ''));
}

document.getElementsByClassName(
  'total-population')[0].innerHTML = total.toLocaleString();

document.getElementsByClassName(
  'average-population')[0].innerHTML = (total / populations.length)
  .toLocaleString();
