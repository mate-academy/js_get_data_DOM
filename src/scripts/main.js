'use strict';

const allPopulations = [...document.querySelectorAll('.population')];

const totalPopulationElement = document.querySelector('.total-population');
const averagePopulationElement = document.querySelector('.average-population');

const populationData = [];

let averagePopulation = 0;
let totalPopulation = 0;

for (const population of allPopulations) {
  populationData.push(+(population.textContent.split(',').join('')));
}

for (const population of populationData) {
  totalPopulation += population;
}

averagePopulation = totalPopulation / populationData.length;

totalPopulationElement.textContent = totalPopulation.toLocaleString('en-US');

averagePopulationElement.textContent = averagePopulation
  .toLocaleString('en-US');
