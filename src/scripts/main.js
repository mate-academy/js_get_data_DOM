'use strict';

// write your code here
const population = document.querySelectorAll('span.population');

const populationArray = [];

for (const element of population) {
  const newLine = element.textContent.replaceAll(',', '');

  populationArray.push(+newLine);
}

const totalPopulation = populationArray.reduce((a, b) => a + b, 0);
const averagePopulation = totalPopulation / populationArray.length;
const totalPopulationString = totalPopulation.toLocaleString('en-US');
const averagePopulationString = averagePopulation.toLocaleString('en-US');

document.querySelector('.total-population').textContent = totalPopulationString;

document.querySelector('.average-population').textContent =
  averagePopulationString;
