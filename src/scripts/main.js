'use strict';

const population = document.querySelectorAll('.population');
const averagePopulation = document.querySelector('.average-population');
const totalPopulation = document.querySelector('.total-population');
const newPopulation = [...document.querySelectorAll('.population')];
let totalPopulationResult = 0;

for (const onePopulation of newPopulation) {
  totalPopulationResult += Number(onePopulation.innerText.split(',').join(''));
}

const newTotalPopulationResult = String(totalPopulationResult).split('');
const resultTotal = [];

while (newTotalPopulationResult.length) {
  resultTotal.unshift(newTotalPopulationResult.splice(-3).join(''));
}

const averagePopulationResult = Math.round(
  totalPopulationResult / population.length,
);
const newAveragePopulationResul = String(averagePopulationResult).split('');
const resultAverage = [];

while (newAveragePopulationResul.length) {
  resultAverage.unshift(newAveragePopulationResul.splice(-3).join(''));
}

totalPopulation.replaceWith(resultTotal.join(','));
averagePopulation.replaceWith(resultAverage.join(','));
