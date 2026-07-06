'use strict';

// write your code here
const populations = document.querySelectorAll('.population');
const averageElement = document.querySelector('.average-population');
const totalElement = document.querySelector('.total-population');

const populationValues = [];

for (const population of populations) {
  const value = Number(population.textContent.replace(/,/g, ''), 10);

  populationValues.push(value);
}

const totalPopulation = populationValues.reduce((acc, curr) => acc + curr, 0);
const averagePopulation = Math.round(totalPopulation / populationValues.length);

averageElement.textContent = averagePopulation.toLocaleString('en-US');
totalElement.textContent = totalPopulation.toLocaleString('en-US');
