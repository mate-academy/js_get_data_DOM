'use strict';

const populationsElements = document.querySelectorAll('.population');
const totalPopulationElem = document.querySelector('.total-population');
const averagePopulationElem = document.querySelector('.average-population');
let totalPopulation = 0;

for (const elem of populationsElements) {
  totalPopulation += +elem.textContent.split(',').join('');
}

const avaragePopulation = totalPopulation / populationsElements.length;

totalPopulationElem.textContent = totalPopulation.toLocaleString('en-US');
averagePopulationElem.textContent = avaragePopulation.toLocaleString('en-US');
