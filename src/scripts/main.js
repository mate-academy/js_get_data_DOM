'use strict';

// write your code here
const population = [...document.querySelectorAll('.population')];
const totalEl = document.querySelector('.total-population');
const averageEl = document.querySelector('.average-population');

const total = population
  .map((el) => +el.textContent.replaceAll(',', ''))
  .reduce((prev, el) => prev + el, 0);

const average = total / population.length;

totalEl.textContent = total.toLocaleString('en');
averageEl.textContent = Math.round(average).toLocaleString('en');
