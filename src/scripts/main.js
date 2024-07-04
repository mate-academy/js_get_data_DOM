'use strict';

const elements = document.getElementsByClassName('population');
let allPopulationNumber = 0;

for (const key of elements) {
  allPopulationNumber += +key.innerHTML.replaceAll(',', '');
}

const averagePopulation = allPopulationNumber / elements.length;

const classTotalPopulation = document.querySelector('.total-population');
const classAveragePopulation = document.querySelector('.average-population');

classTotalPopulation.innerHTML = allPopulationNumber.toLocaleString('en-US');

classAveragePopulation.innerHTML = averagePopulation.toLocaleString('en-US');
