'use strict';

const population = document.querySelectorAll('.population');
const populationNumber = [...population].map(number =>
  Number(number.innerHTML.split(',').join('')));

const totalSumPopulation = populationNumber.reduce((sum, value) =>
  sum + value);

const averagePopulation = document.querySelector('.average-population');
const totalPopulation = document.querySelector('.total-population');

averagePopulation.innerHTML = (totalSumPopulation
  / populationNumber.length).toLocaleString('en-US');
totalPopulation.innerHTML = totalSumPopulation.toLocaleString('en-US');
