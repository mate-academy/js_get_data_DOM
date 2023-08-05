'use strict';

const population = [...document.querySelectorAll('.population')]
  .map(el => parseInt(el.textContent.replace(/,/g, '')));

const totalPopulation = population.reduce((acc, num) => acc + num, 0);
const averagePopulation = totalPopulation / population.length;

const formattedTotal = totalPopulation.toLocaleString('en-US');
const formattedAverage = averagePopulation.toLocaleString('en-US');

document.querySelector('.total-population').textContent = formattedTotal;
document.querySelector('.average-population').textContent = formattedAverage;
