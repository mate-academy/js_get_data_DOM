'use strict';

const populationElements = document.getElementsByClassName('population');

let totalPopulation = 0;
const populations = [];

for (let i = 0; i < populationElements.length; i++) {
  const populationSplit = populationElements[i].textContent.split(',');
  const population = populationSplit.join('');

  populations.push(population);
  totalPopulation += parseFloat(population);
}

const averagePopulation = totalPopulation / populations.length;

const formattedTotalPopulation = totalPopulation.toLocaleString('en-US');
const formattedAveragePopulation = averagePopulation.toLocaleString('en-US');

document.querySelector('.total-population').textContent =
  formattedTotalPopulation;

document.querySelector('.average-population').textContent =
  formattedAveragePopulation;
