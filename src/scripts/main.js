'use strict';

const populationClass = document.querySelectorAll('.population');

const values = Object.values(populationClass);

const populationCount = values.map(
  (value) => +value.textContent.replaceAll(',', ''),
);

const total = populationCount.reduce((acc, count) => acc + count, 0);
const average = total / populationCount.length;

const prepareTotal = total.toLocaleString('en-US');
const prepareAverage = average.toLocaleString('en-US');

document.querySelector('.total-population').textContent = prepareTotal;
document.querySelector('.average-population').textContent = prepareAverage;
