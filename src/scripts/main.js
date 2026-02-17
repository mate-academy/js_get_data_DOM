'use strict';

// write your code here

const populationOfCounties = document.querySelectorAll('span.population');

let totalPopulation = 0;
let averagePopulation = 0;

for (const element of populationOfCounties) {
  const population = element.textContent;

  const cleared = population.replace(/[^\d]/g, '').trim();

  totalPopulation += +cleared;
}

averagePopulation = totalPopulation / populationOfCounties.length;

const totalPopulationElement = document.querySelector('span.total-population');
const avgPopulationElement = document.querySelector('span.average-population');

totalPopulationElement.textContent = totalPopulation.toLocaleString('en-US');

avgPopulationElement.textContent =
  Math.round(averagePopulation).toLocaleString('en-US');
