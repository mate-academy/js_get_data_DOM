'use strict';

const population = document.querySelectorAll('.population');
let totalPopulationCount = 0;

for (const item of population) {
  totalPopulationCount += Number(item.textContent.replace(/,/g, ''));
}

const averagePopulationResult = Math.round(
  totalPopulationCount / population.length,
);

const totalPopulation = document.querySelector('.total-population');
const avaragePopulation = document.querySelector('.average-population');

totalPopulation.textContent = totalPopulationCount.toLocaleString('en-US');
avaragePopulation.textContent = averagePopulationResult.toLocaleString('en-US');
