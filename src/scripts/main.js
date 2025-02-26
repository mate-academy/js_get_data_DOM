'use strict';

const population = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const getPopulationAmount = Array.from(population)
  .map((n) => n.innerHTML.split(',').join(''))
  .map((n) => Number(n));

const getTotal = getPopulationAmount.reduce((total, n) => total + n, 0);
const getAverage = Math.floor(getTotal / 9);

totalPopulation.textContent = getTotal.toLocaleString();
averagePopulation.textContent = getAverage.toLocaleString();
