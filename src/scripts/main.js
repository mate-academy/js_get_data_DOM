'use strict';

const avaragePopulationElement = document.querySelector('.average-population');
const totalPopulationElement = document.querySelector('.total-population');
const population = document.querySelectorAll('.population');

const populationValues = Array.from(
  population,
  (pop) => Number(pop.textContent.replaceAll(',', '')) || 0,
);

const totalPopulation = populationValues.reduce((sum, pop) => sum + pop, 0);
const avaragePopulation = totalPopulation / populationValues.length;

avaragePopulationElement.textContent =
  avaragePopulation.toLocaleString('en-US');

totalPopulationElement.textContent = totalPopulation.toLocaleString('en-US');
