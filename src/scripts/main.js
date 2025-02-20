'use strict';

const populations = document.querySelectorAll('.population');
const populationTotal = document.querySelector('.total-population');
const populationAverage = document.querySelector('.average-population');

const populationArray = [...populations].map(
  population => Number(population.textContent.split(',').join('')));

const total = populationArray.reduce(
  (acc, population) => acc + population, 0);

const average = total / populationArray.length;

populationTotal.textContent = total.toLocaleString();
populationAverage.textContent = average.toLocaleString();
