'use strict';

const countriesPopulation = document.querySelectorAll('.population');
const total = [...countriesPopulation]
  .map(item => +item.textContent.split(',').join(''))
  .reduce((a, b) => a + b, 0);

const average = (total / countriesPopulation.length);

document.querySelector('.total-population')
  .textContent = total.toLocaleString('en-US');

document.querySelector('.average-population')
  .textContent = average.toLocaleString('en-US');
