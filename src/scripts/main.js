'use strict';

const allPopulations = [...document.querySelectorAll('.population')].map(
  (element) => +element.innerHTML.replaceAll(',', ''),
);

const totalPopulation = allPopulations.reduce((prev, num) => prev + num, 0);

const totalPopulationTag = document.querySelector('.total-population');
const averagePopulationTag = document.querySelector('.average-population');

totalPopulationTag.textContent = totalPopulation.toLocaleString();

averagePopulationTag.textContent = Math.round(
  totalPopulation / allPopulations.length,
).toLocaleString('en-US');
