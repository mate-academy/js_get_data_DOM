'use strict';

function convertPopulationToNumber(populationString) {
  return Number(populationString.split(',').join(''));
}

const populationElements = document.querySelectorAll('span.population');
const populationList = [...populationElements]
  .map(({ textContent }) => convertPopulationToNumber(textContent));

const totalPopulation = populationList
  .reduce((sum, value) => sum + value);
const averagePopulation = totalPopulation / populationList.length;

const totalPopulationElement = document.querySelector('span.total-population');
const averagePopulationElement
  = document.querySelector('span.average-population');

totalPopulationElement.textContent = totalPopulation.toLocaleString('en');
averagePopulationElement.textContent = averagePopulation.toLocaleString('en');
