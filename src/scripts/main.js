'use strict';

const populationSpans = document.querySelectorAll('.population');
const totalPopulationSpan = document.querySelector('.total-population');
const averagePopulationSpan = document.querySelector('.average-population');

const populationNumbers = [];

populationSpans.forEach((el) => {
  populationNumbers.push(+el.textContent.replace(/,/g, ''));
});

const total = populationNumbers.reduce((prev, next) => prev + next);
const average = total / populationNumbers.length;

totalPopulationSpan.textContent = total.toLocaleString('en');

averagePopulationSpan.textContent = average.toLocaleString('en', {
  maximumFractionDigits: 0,
});
