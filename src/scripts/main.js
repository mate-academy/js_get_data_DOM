'use strict';

const populationElements = document.querySelectorAll('.population');
const totalPopulationElement = document.querySelector('.total-population');
const averagePopulationElement = document.querySelector('.average-population');

let totalPopulation = 0;
let averagePopulation = 0;

for (const population of populationElements) {
  totalPopulation += +population.textContent.split(',').join('');
}

averagePopulation = totalPopulation / populationElements.length;

totalPopulationElement.textContent = totalPopulation.toLocaleString('en-US');

averagePopulationElement.textContent =
  averagePopulation.toLocaleString('en-US');
