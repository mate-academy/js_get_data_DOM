'use strict';

const averagePopulation = document.querySelector('.average-population');
const totalPopulation = document.querySelector('.total-population');

const populationsList = [...document.querySelectorAll('.population')]
  .map(population => +population.innerHTML.split(',').join(''));

const totalN = populationsList.reduce((sum, i) => sum + i, 0);
const averageN = totalN / populationsList.length;

averagePopulation.innerHTML = averageN.toLocaleString('en-US');
totalPopulation.innerHTML = totalN.toLocaleString('en-US');
