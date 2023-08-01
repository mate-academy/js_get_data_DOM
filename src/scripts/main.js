'use strict';

const populationValues = [...document.querySelectorAll('.population')]
  .map(element => {
    const populationText = element.textContent;

    try {
      return parseInt(populationText.replace(/,/g, ''), 10);
    } catch (error) {
      return 0;
    }
  });

const totalPopulation = populationValues
  .reduce((total, population) => total + population, 0);
const averagePopulation = totalPopulation / populationValues.length || 0;

const averagePopulationElement = document.querySelector('.average-population');
const totalPopulationElement = document.querySelector('.total-population');

averagePopulationElement.innerHTML = averagePopulation.toLocaleString('en-US');
totalPopulationElement.innerHTML = totalPopulation.toLocaleString('en-US');
