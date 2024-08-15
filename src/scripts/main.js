'use strict';

function convertToNumber(str) {
  return +str.replaceAll(',', '');
}

const populations = [...document.querySelectorAll('.population')];

const convertedPopulations = populations.map((population) => {
  return convertToNumber(population.textContent);
});

const totalPopulation = convertedPopulations.reduce((sum, p) => {
  return sum + p;
}, 0);

const averagePopulation = totalPopulation / convertedPopulations.length;

const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');

totalElement.textContent = totalPopulation;
averageElement.textContent = averagePopulation;
