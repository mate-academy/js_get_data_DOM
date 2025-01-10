'use strict';

const populationArr = [...document.querySelectorAll('span.population')];
const populationNumbers = populationArr.map((el) => +el.split(',').join(''));

const total = populationNumbers.reduce((sum, num) => sum + num, 0);
const average = Math.round(total / populationNumbers.length);

document.querySelector('span.total-population').textContent =
  total.toLocaleString('en-US');

document.querySelector('span.average-population').textContent =
  average.toLocaleString('en-US');
