'use strict';

// write your code here
const collectionOfPopulation = document.body.querySelectorAll('.population');

const populationValuesArray = [...collectionOfPopulation].map(item => {
  return +(item.textContent.replaceAll(',', ''));
});

const totalPopulation = populationValuesArray
  .reduce((sumPopulation, population) => {
    return sumPopulation + population;
  }, 0);

const averagePopulation = totalPopulation / populationValuesArray.length;

const totalPopulationElement = document.querySelector('.total-population');
const averagePopulationElement = document.querySelector('.average-population');

totalPopulationElement.textContent = totalPopulation.toLocaleString();
averagePopulationElement.textContent = averagePopulation.toLocaleString();
