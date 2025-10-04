/* eslint-disable prettier/prettier */
'use strict';

// write your code here
const populationElements = [...document.querySelectorAll('.population')];
const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');

const populations = populationElements.map((population) =>
  population.innerText.trim());

let normalizedPopulations = populations.map((population) =>
  Number(population.replace(/,/g, '')));

normalizedPopulations = normalizedPopulations.filter(
  (item) => !Number.isNaN(item) && Number.isFinite(item),
);

const totalPopulation = normalizedPopulations.reduce(
  (acc, population) => acc + population,
  0,
);

const averagePopulation = normalizedPopulations.length
  ? totalPopulation / normalizedPopulations.length
  : 0;

if (totalElement) {
  totalElement.textContent = totalPopulation.toLocaleString('en-US');
}

if (averageElement) {
  averageElement.textContent = averagePopulation.toLocaleString('en-US');
}
