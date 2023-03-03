'use strict';

const population = document.querySelectorAll('.population');

const populationToNumber = [...population]
  .map(item => +(item.textContent.split(',').join('')));

const total = populationToNumber.reduce((a, b) => a + b);
const average = total / population.length;

const totalPopulation = document.querySelector('.total-population');

const averagePopulation = document.querySelector('.average-population');

totalPopulation.textContent = total.toLocaleString();
averagePopulation.textContent = average.toLocaleString();
