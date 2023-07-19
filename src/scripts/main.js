'use strict';

const population = document.querySelectorAll('.population');
const averagePopulation = document.querySelector('.average-population');
const totalPopulation = document.querySelector('.total-population');

let count = 0;
let totalResult = 0;

for (let i = 0; i < population.length; i++) {
  const populationConverted = +population[i].innerText.split(',').join('');

  totalResult += populationConverted;
  count++;
}

const averageResult = totalResult / count;
const formattedAverage = averageResult.toLocaleString('en-US');
const formattedTotal = totalResult.toLocaleString('en-US');

averagePopulation.innerText = formattedAverage;
totalPopulation.innerText = formattedTotal;
