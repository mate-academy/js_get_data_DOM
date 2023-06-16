'use strict';

const totalPopulationElem = document.querySelector('.total-population');
const avgPopulationElem = document.querySelector('.average-population');

const populationElements = [...document.querySelectorAll('.population')];

const totalPopulation = populationElements.reduce((sum, population) => {
  const currPopulationText = population.innerText;
  const currPopulationValue = +currPopulationText.split(',').join('');

  return sum + currPopulationValue;
}, 0);

const avgPopulation = totalPopulation / populationElements.length;

totalPopulationElem.innerText = totalPopulation.toLocaleString('en-US');
avgPopulationElem.innerText = avgPopulation.toLocaleString('en-US');
