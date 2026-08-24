'use strict';

const populationElements = document.querySelectorAll('.population');

const populationTexts = [...populationElements].map(
  (element) => element.textContent,
);

const populations = populationTexts
  .map((text) => text.replaceAll(',', '').trim())
  .filter((text) => text !== '')
  .map(Number)
  .filter(Number.isFinite);

const totalPopulation = populations.reduce(
  (sum, population) => sum + population,
  0,
);

const averagePopulation = populations.length
  ? totalPopulation / populations.length
  : 0;

const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');

totalElement.textContent = totalPopulation.toLocaleString('en-US');
averageElement.textContent = averagePopulation.toLocaleString('en-US');
