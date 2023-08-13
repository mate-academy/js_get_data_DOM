'use strict';

const populationValues = [...document.querySelectorAll('.population')]
  .map(element => {
    const populationText = element.textContent || '';

    return parseInt(populationText.replace(/,/g, ''), 10) || 0;
  });

const totalPopulation = populationValues
  .reduce((total, population) => total + population, 0);
const averagePopulation = populationValues.length === 0
  ? 0
  : totalPopulation / populationValues.length;

const averagePopulationElement = document.querySelector('.average-population');
const totalPopulationElement = document.querySelector('.total-population');

averagePopulationElement.innerHTML = averagePopulation.toLocaleString('en-US');
totalPopulationElement.innerHTML = totalPopulation.toLocaleString('en-US');
