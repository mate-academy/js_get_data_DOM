'use strict';

const populationElements = document.querySelectorAll('.population');

let totalPopulation = 0;
let validPopulationCount = 0;

populationElements.forEach((element) => {
  const population = Number(element.textContent.replace(/,/g, ''));

  if (Number.isFinite(population)) {
    totalPopulation += population;
    validPopulationCount++;
  }
});

const averagePopulation = totalPopulation / validPopulationCount;

document.querySelector('.total-population').textContent =
  totalPopulation.toLocaleString('en-US');

document.querySelector('.average-population').textContent =
  Math.round(averagePopulation).toLocaleString('en-US');
