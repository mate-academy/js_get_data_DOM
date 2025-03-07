'use strict';

const populationData = document.querySelectorAll('.population');
const totalPopulationElem = document.querySelector('.total-population');
const averagePopulationElem = document.querySelector('.average-population');

let totalPopulation = 0;

for (const data of populationData) {
  const filteredData = data.textContent.replaceAll(',', '');

  const number = Number(filteredData);

  if (Number.isNaN(number)) {
    throw new Error('Cannot be converted to number');
  }

  totalPopulation += number;
}

const averagePopulation = Math.round(totalPopulation / populationData.length);

totalPopulationElem.textContent = totalPopulation.toLocaleString('en-US');
averagePopulationElem.textContent = averagePopulation.toLocaleString('en-US');
