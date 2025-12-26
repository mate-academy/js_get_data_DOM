'use strict';

// write your code here
const populationsElements = [...document.querySelectorAll('.population')];
const totalPopulationElement = document.querySelector('.total-population');
const avgPopulationElement = document.querySelector('.average-population');

const parsedPopulations = populationsElements
  .map((population) => population.textContent)
  .map((text) => +text.replaceAll(',', ''));

const totalPopulation = parsedPopulations.reduce(
  (acc, population) => acc + population,
  0,
);

const avgPopulation = Math.round(totalPopulation / parsedPopulations.length);

totalPopulationElement.textContent = totalPopulation.toLocaleString('en-US');
avgPopulationElement.textContent = avgPopulation.toLocaleString('en-US');
