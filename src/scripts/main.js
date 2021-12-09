'use strict';

const populations = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

const populationsList = [...populations].map(val => (
  +val.textContent.split(',').join('')
));

const totalPopulation = populationsList.reduce(
  (prev, next) => prev + next, 0);

const averagePopulation = totalPopulation / populationsList.length;

total.textContent = totalPopulation.toLocaleString();
average.textContent = averagePopulation.toLocaleString();
