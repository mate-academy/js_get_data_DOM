'use strict';

const populationElements = document.querySelectorAll('.population');
const populationArr = [];

for (const element of populationElements) {
  const value = parseInt(element.textContent.replace(/,/g, ''));

  populationArr.push(value);
}

const populationSum = populationArr.reduce((sum, curr) => sum + curr);
const avgPopulation = populationSum / populationArr.length;

const totalPopulationElement = document.querySelector('.total-population');

totalPopulationElement.textContent = populationSum.toLocaleString();

const avgPopulationElement = document.querySelector('.average-population');

avgPopulationElement.textContent = avgPopulation.toLocaleString();
