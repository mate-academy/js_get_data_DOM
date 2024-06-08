'use strict';

const populationsArray = [...document.querySelectorAll('.population')].map(
  (population) => +population.textContent.split(',').join(''),
);

const total = populationsArray.reduce((acum, val) => acum + val, 0);
const average = total / populationsArray.length;

const resultTotal = document.querySelector('.total-population');
const resultAverage = document.querySelector('.average-population');

resultTotal.textContent = total.toLocaleString('en-US');
resultAverage.textContent = average.toLocaleString('en-US');

// console.log(total);
// console.log(average);
