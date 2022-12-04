'use strict';

const populations = [...document.querySelectorAll('.population')]
  .map(population => Number(population.textContent.split(',').join('')));

const totalPopulation = populations.reduce(
  (prev, population) => prev + population, 0
);
const averagePopulation = totalPopulation / populations.length;

const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

total.textContent = totalPopulation.toLocaleString('en-US');
average.textContent = averagePopulation.toLocaleString('en-US');
