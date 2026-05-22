'use strict';

const populations = [...document.querySelectorAll('.population')];
const totalPopulationElem = document.querySelector('.total-population');
const avaragePopulationElem = document.querySelector('.average-population');

const totalPopulation = populations.reduce((sum, population) => {
  const clearStr = population.textContent.replaceAll(',', '');

  return +clearStr + sum;
}, 0);

const avaragePopulation = totalPopulation / populations.length;

totalPopulationElem.textContent = totalPopulation.toLocaleString('en-US');
avaragePopulationElem.textContent = avaragePopulation.toLocaleString('en-US');
