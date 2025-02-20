'use strict';

const populationElements = document.getElementsByClassName('population');
let totalPopulation = 0;
let count = 0;

Array.from(populationElements).forEach((element) => {
  totalPopulation += Number(element.textContent.replace(/,/g, ''));
  count++;
});

const averagePopulation = totalPopulation / count;

const averagePopulationDisplay = document.querySelector('.average-population');
const totalPopulationDisplay = document.querySelector('.total-population');

function StringFormat(value) {
  return value.toLocaleString('en-US');
}

if (totalPopulationDisplay) {
  totalPopulationDisplay.textContent = StringFormat(totalPopulation);
}

if (averagePopulationDisplay) {
  averagePopulationDisplay.textContent = StringFormat(averagePopulation);
}
