'use strict';

const populations = document.querySelectorAll('span.population');
const totalPopulation = document.querySelector('span.total-population');
const averagePopulation = document.querySelector('span.average-population');

const sum = [...populations].reduce(
  (prev, amount) => prev + (+amount.textContent.replaceAll(',', '') || 0),
  0,
);

const average = sum / populations.length;

totalPopulation.textContent = sum.toLocaleString('en-US');
averagePopulation.textContent = (+average.toFixed(2)).toLocaleString('en-US');
