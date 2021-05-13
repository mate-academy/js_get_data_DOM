'use strict';

const populationsList = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const populations = [...populationsList].map(country =>
  +country.textContent
    .split(',')
    .join('')
);

const total = populations.reduce((a, b) => a + b);
const average = total / populations.length;

totalPopulation.textContent = total.toLocaleString('en-US');
averagePopulation.textContent = average.toLocaleString('en-US');
