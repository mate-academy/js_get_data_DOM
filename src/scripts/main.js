'use strict';

const allPopulationElements = document.querySelectorAll('.population');
const totalPopulationElement = document.querySelector('.total-population');
const averagePopulationElement = document.querySelector('.average-population');

let totalPopulation = 0;

allPopulationElements.forEach((population) => {
  const populationNumber = parseInt(population.textContent.replaceAll(',', ''));

  if (!Number.isNaN(populationNumber)) {
    totalPopulation += populationNumber;
  }
});

totalPopulationElement.textContent = totalPopulation.toLocaleString('en-US');

averagePopulationElement.textContent = Math.round(
  totalPopulation / allPopulationElements.length,
).toLocaleString('en-US');
