'use strict';

const population = document.querySelectorAll('.population');
const populationNumbers = [...population].map(number => number.innerText
  .replace(/,/g, ''));
const populationTotal = populationNumbers.reduce((prev, next) =>
  +prev + +next);
const populationAverage = populationTotal / populationNumbers.length;

document.querySelector('.total-population').innerText = populationTotal;
document.querySelector('.average-population').innerText = populationAverage;
