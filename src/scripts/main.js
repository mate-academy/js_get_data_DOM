'use strict';

const populations = document.querySelectorAll('.population');
const populationsArray = [...populations];
const populationTexts = populationsArray.map(
  (population) => population.textContent,
);
const populationNumbers = populationTexts
  .map((populationText) => populationText.replaceAll(',', ''))
  .map(Number);
const totalPopulation = populationNumbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0,
);
const averagePopulation = totalPopulation / populationNumbers.length;
const formattedTotal = Intl.NumberFormat('en-US').format(totalPopulation);
const formattedAverage = Intl.NumberFormat('en-US').format(averagePopulation);
const totalPopulationElement = document.querySelector('.total-population');

totalPopulationElement.textContent = formattedTotal;

const averagePopulationElement = document.querySelector('.average-population');

averagePopulationElement.textContent = formattedAverage;
