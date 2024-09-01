'use strict';

const populationElements = document.getElementsByClassName('population');

let totalPopulationCount = null;

for (const elem of populationElements) {
  const population = Number(elem.innerHTML.replace(/,/g, ''));

  totalPopulationCount += population;
}

const averagePopulationCount = totalPopulationCount / populationElements.length;

const formattedTotalPopulation = totalPopulationCount.toLocaleString('en-US');

const formattedAveragePopulation =
  averagePopulationCount.toLocaleString('en-US');

document.querySelector('.total-population').innerHTML =
  formattedTotalPopulation;

document.querySelector('.average-population').innerHTML =
  formattedAveragePopulation;
