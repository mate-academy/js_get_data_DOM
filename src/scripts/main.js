'use strict';

const allPopulationElements = document.querySelectorAll('.population');
const totalPopulationElement = document.querySelector('.total-population');
const averagePopulationElement = document.querySelector('.average-population');

let totalPopulation = 0;

allPopulationElements.forEach((population) => {
  const populationNumber = parseInt(population.textContent.replaceAll(',', ''));

  totalPopulation += populationNumber;
});

totalPopulationElement.textContent = totalPopulation.toLocaleString('en-IN');

averagePopulationElement.textContent = Math.round(
  totalPopulation / allPopulationElements.length,
).toLocaleString('en-IN');
