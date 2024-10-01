'use strict';

const populationElements = document.getElementsByClassName('population');
const populations = [];

for (const element of populationElements) {
  populations.push(+element.textContent.split(',').join(''));
}

const totalPopulation = populations.reduce(
  (sum, population) => sum + population,
  0,
);
const averagePopulation = Math.round(totalPopulation / populations.length);

const formattedTotalPopulation = totalPopulation.toLocaleString('en-US');
const formattedAveragePopulation = averagePopulation.toLocaleString('en-US');

document.querySelector('.total-population').textContent =
  formattedTotalPopulation;

document.querySelector('.average-population').textContent =
  formattedAveragePopulation;
