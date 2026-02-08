'use strict';

const population = document.querySelectorAll('.population');
let totalPopulationCount = 0;
let isNumberCount = 0;

for (const item of population) {
  const valueNormalization = item.textContent.replace(/[\u00A0,\s]/g, '');
  const value = Number(valueNormalization);

  if (Number.isFinite(value)) {
    totalPopulationCount += value;
    isNumberCount++;
  }
}

const averagePopulationResult =
  isNumberCount > 0 ? Math.round(totalPopulationCount / isNumberCount) : 0;

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

totalPopulation.textContent = totalPopulationCount.toLocaleString('en-US');
averagePopulation.textContent = averagePopulationResult.toLocaleString('en-US');
