'use strict';

const populationElements = document.querySelectorAll('.population');

const populations = Array.from(populationElements)
  .map((element) => element.textContent.replace(/,/g, '')) // remove commas
  .map((text) => Number(text))
  .filter((num) => !isNaN(num));

const totalPopulation = populations.reduce((sum, value) => sum + value, 0);

const averagePopulation = totalPopulation / populations.length;

const formattedTotal = totalPopulation.toLocaleString();
const formattedAverage = Math.round(averagePopulation).toLocaleString();

document.querySelector('.total-population').textContent = formattedTotal;
document.querySelector('.average-population').textContent = formattedAverage;
