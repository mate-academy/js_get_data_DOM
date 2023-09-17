'use strict';

function extractNumberFromString(str) {
  const numericString = str.replace(/[^0-9.]/g, '');

  return parseInt(numericString);
}

const totalPopulationElement = document.querySelector('.total-population');
const averagePopulationElement = document.querySelector('.average-population');

const populationArray = document.querySelectorAll('.population');
const populationTotal = [...populationArray].reduce(
  (total, current) => total + extractNumberFromString(current.innerText), 0);

const averagePopulation = populationTotal / populationArray.length;

totalPopulationElement.innerText = populationTotal.toLocaleString('en-US');
averagePopulationElement.innerText = averagePopulation.toLocaleString('en-US');
