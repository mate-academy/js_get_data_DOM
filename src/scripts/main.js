'use strict';

function convertNumber(number, contertTo) {
  return number.toLocaleString(contertTo);
}

// find and make array with all population to number
const allPopulationSpan = document.querySelectorAll('.population');

const population = [...allPopulationSpan]
  .map(amount => +amount.textContent.split(',').join(''));

// total population logic
const totalPopulation = population
  .reduce((item1, item2) => item1 + item2, 0);

const totalPopulationElement = document.querySelector('.total-population');

totalPopulationElement.textContent = convertNumber(totalPopulation, 'en-US');

// average population logic
const averagePopulation = totalPopulation / population.length;

const averagePopulationElement = document.querySelector('.average-population');

averagePopulationElement.textContent = convertNumber(
  averagePopulation, 'en-US',
);
