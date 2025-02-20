'use strict';

const populationClass = document.querySelectorAll('.population');

const values = Object.values(populationClass);

const populationCount = values.map(
  (value) => +value.textContent.replaceAll(',', ''),
);

const total = populationCount.reduce((acc, count) => acc + count, 0);
const average = total / populationCount.length;

const getTotal = total.toLocaleString('en-US');
const getAverage = average.toLocaleString('en-US');

document.querySelector('.total-population').textContent = getTotal;
document.querySelector('.average-population').textContent = getAverage;
