'use strict';

const populations = document.querySelectorAll('.population');
let totalPopulation = 0;
let validPopulations = 0;

populations.forEach(population => {
  const populationText = population.textContent;
  const populationNumber = Number(populationText.replace(/,/g, ''));

  if (!isNaN(populationNumber)) {
    totalPopulation += populationNumber;
    validPopulations++;
  }
});

const averagePopulation = totalPopulation / validPopulations;
const averagePopulationFormatted = averagePopulation.toLocaleString();
const totalPopulationFormatted = totalPopulation.toLocaleString();

document.querySelector('.average-population').textContent
= averagePopulationFormatted;

document.querySelector('.total-population').textContent
= totalPopulationFormatted;
