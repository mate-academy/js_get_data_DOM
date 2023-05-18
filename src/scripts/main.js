'use strict';

const populations = document.querySelectorAll('.population');
let validPopulations = 0;

const totalPopulation = [...populations].reduce((total, population) => {
  const populationText = population.textContent;
  const populationNumber = Number(populationText.replace(/,/g, ''));

  if (!isNaN(populationNumber)) {
    validPopulations++;

    return total + populationNumber;
  }

  return total;
}, 0);

const averagePopulation = totalPopulation / validPopulations;
const averagePopulationFormatted = averagePopulation.toLocaleString();
const totalPopulationFormatted = totalPopulation.toLocaleString();

document.querySelector('.average-population').textContent
= averagePopulationFormatted;

document.querySelector('.total-population').textContent
= totalPopulationFormatted;
