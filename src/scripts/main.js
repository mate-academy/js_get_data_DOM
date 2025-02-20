'use strict';

const allPopulation = [...document.querySelectorAll('.population')];
const populations = allPopulation.map(
  (num) => +num.textContent.split(',').join(''),
);
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

const totalCalculate = populations.reduce((acc, curr) => acc + curr, 0);

const averageCalculate = totalCalculate / allPopulation.length;

total.textContent = totalCalculate.toLocaleString('en-US');
average.textContent = averageCalculate.toLocaleString('en-US');
