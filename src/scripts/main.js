'use strict';

const populationElements = document.querySelectorAll('.population');

let sum = 0;

for (const element of populationElements) {
  const populationText = element.textContent;

  const populationTextCleaned = populationText.replace(/,/g, '');

  const populationNumber = parseInt(populationTextCleaned, 10);

  sum += populationNumber;
}

const totalPopulationElement = document.querySelector('.total-population');

totalPopulationElement.textContent = sum.toLocaleString('en-US');

const averagePopulation = sum / populationElements.length;

const averagePopulationElement = document.querySelector('.average-population');

averagePopulationElement.textContent =
  averagePopulation.toLocaleString('en-US');
