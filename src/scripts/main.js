'use strict';

const populationElements = document.getElementsByClassName('population');

let totalPopulation = 0;
const populations = [];

for (let i = 0; i < populationElements.length; i++) {
  const population = parseInt(
    populationElements[i].textContent.replace(',', ''),
  );

  if (!isNaN(population)) {
    populations.push(population);
    totalPopulation += population;
  }
}

const averagePopulation = totalPopulation / populations.length;

const formattedTotalPopulation = totalPopulation.toLocaleString('en-US');
const formattedAveragePopulation = averagePopulation.toLocaleString('en-US');

document.querySelector('.total-population').textContent =
  formattedTotalPopulation;

document.querySelector('.average-population').textContent =
  formattedAveragePopulation;
