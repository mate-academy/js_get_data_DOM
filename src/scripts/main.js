'use strict';

const population = [...document.querySelectorAll('.population')].map(
  (e) => +e.textContent.split(',').join('')
);
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

total.textContent = population.reduce((prev, e) => prev + e, 0);
average.textContent = total.textContent / population.length;
