'use strict';

const populationElements = document.querySelectorAll('.population');
const populations = Array.from(populationElements).map((element) => {
  const numberString = element.textContent.replace(/,/g, '');

  return parseInt(numberString, 10);
});

const totalPopulation = populations.reduce((sum, value) => sum + value, 0);
const averagePopulation = totalPopulation / populations.length;

const formattedTotal = totalPopulation.toLocaleString();
const formattedAverage = Math.round(averagePopulation).toLocaleString();

const totalPopulationElement = document.querySelector('.total-population');

if (totalPopulationElement) {
  totalPopulationElement.textContent = formattedTotal;
}

const averagePopulationElement = document.querySelector('.average-population');

if (averagePopulationElement) {
  averagePopulationElement.textContent = formattedAverage;
}
