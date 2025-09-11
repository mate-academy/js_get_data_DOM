'use strict';

const populations = document.querySelectorAll('.population');

const arrayOfPopulation = Array.from(populations).map((span) => {
  return Number(span.textContent.replace(/,/g, ''));
});

const totalSum = arrayOfPopulation.reduce((sum, p) => sum + p, 0);
const totalAverage = Math.round(totalSum / arrayOfPopulation.length);

document.querySelector('.total-population').textContent =
  totalSum.toLocaleString('en-US');

document.querySelector('.average-population').textContent =
  totalAverage.toLocaleString('en-US');
