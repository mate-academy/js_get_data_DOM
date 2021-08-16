'use strict';

const populationNodeList = document.querySelectorAll('.population');
const totalPopulationElement = document.querySelector('.total-population');
const averagePopulationElement = document.querySelector('.average-population');

const populationValues = [...populationNodeList]
  .map(nodeItem => +nodeItem.textContent.split(',').join(''));

const totalPopulation = populationValues.reduce((a, b) => a + b, 0);
const totalPopulationFormatted = totalPopulation.toLocaleString('en-US');

const averagePopulation = totalPopulation / populationValues.length;
const averagePopulationFormatted = averagePopulation.toLocaleString('en-US');

totalPopulationElement.textContent = totalPopulationFormatted;
averagePopulationElement.textContent = averagePopulationFormatted;
