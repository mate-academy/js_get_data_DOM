'use strict';

const populationElements = document.querySelectorAll('.population');
const totalPopulationElement = document.querySelector('.total-population');
const averagePopulationElement = document.querySelector('.average-population');

const populations = [...populationElements]
  .map((element) => element.textContent.replaceAll(',', '').trim())
  .map((value) => Number(value))
  .filter((value) => !Number.isNaN(value));

let totalPopulation = 0;

for (const value of populations) {
  totalPopulation += value;
}

let averagePopulation = 0;

if (populations.length > 0) {
  averagePopulation = Math.round(totalPopulation / populations.length);
}

totalPopulationElement.textContent = totalPopulation.toLocaleString('en-US');

averagePopulationElement.textContent =
  averagePopulation.toLocaleString('en-US');
