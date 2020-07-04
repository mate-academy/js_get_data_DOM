'use strict';

const population = [...document.querySelectorAll('span.population')].map(
  number => +number.textContent.split(',').join('')
);
const total = population.reduce((a, b) => a + b, 0);
const average = total / population.length;

const totalPopulation = document.querySelector('span.total-population');
const averagePopulation = document.querySelector('span.average-population');

totalPopulation.textContent = total;
averagePopulation.textContent = average;
