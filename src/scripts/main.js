'use strict';

function convertToNum (str) {
  return +str.replaceAll(',', '');
}

const population = [...document.querySelectorAll('.population')];

const convertedPopulation = population.map((populations) => {
  return convertToNum(populations.textContent);
});

const totalPopulation = convertedPopulation.reduce((sum, p) => {
  return sum + p;
}, 0)

const avgPopulation = totalPopulation / convertedPopulation.length;

const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');

totalElement.textContent = totalPopulation;
averageElement.textContent = avgPopulation;
