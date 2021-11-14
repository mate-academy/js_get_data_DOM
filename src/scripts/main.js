'use strict';

function parsePopulation() {
  const allPopulations = document.querySelectorAll('.population');
  const populationsCountList = [];

  for (const population of allPopulations) {
    const populationNumber = +population.textContent.replace(/,/g, '');

    populationsCountList.push(populationNumber);
  }

  return populationsCountList;
}

const populationsCount = parsePopulation();

const totalPopulationStamp = document.querySelector('.total-population');
const totalPopulation = populationsCount.reduce(
  (total, populationNumber) => total + populationNumber,
  0
);

totalPopulationStamp.textContent = totalPopulation.toLocaleString();

const averagePopulationStamp = document.querySelector('.average-population');
const averagePopulation = totalPopulation / populationsCount.length;

averagePopulationStamp.textContent = averagePopulation.toLocaleString();
