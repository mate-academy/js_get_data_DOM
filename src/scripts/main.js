'use strict';

const population = document.querySelectorAll('.population');
let totalPopulationCount = 0;
let isNumberCount = 0;

for (const item of population) {
  const value = Number(item.textContent.replace(/,/g, ''));

  if (Number.isFinite(value)) {
    totalPopulationCount += value;
    isNumberCount++;
  }
}

const averagePopulationResult = Math.round(
  totalPopulationCount / isNumberCount,
);

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

totalPopulation.textContent = totalPopulationCount.toLocaleString('en-US');
averagePopulation.textContent = averagePopulationResult.toLocaleString('en-US');
