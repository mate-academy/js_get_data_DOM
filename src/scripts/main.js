'use strict';

const populationElements = document.querySelectorAll('.population');

const populationValues = [...populationElements].map(item =>
  +(item.innerText.split(',').join(''))
);

const totalPopulation = populationValues.reduce((sum, n) => sum + n, 0);
const avgPopulation = totalPopulation / populationValues.length;

const totalPopulationElement = document.querySelector('.total-population');
const avgPopulationElement = document.querySelector('.average-population');

totalPopulationElement.textContent = totalPopulation.toLocaleString('en-US');
avgPopulationElement.textContent = avgPopulation.toLocaleString('en-US');
