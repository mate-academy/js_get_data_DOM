'use strict';

const populationAll = [...document.querySelectorAll('.population')].map(
  (item) => +item.textContent.replaceAll(',', ''),
);

const totalPopulation = populationAll.reduce(
  (sum, population) => sum + population,
  0,
);
const averagePopulation = Math.round(totalPopulation / populationAll.length);

const totalPopulationSpan = document.querySelector('.total-population');
const averagePopulationSpan = document.querySelector('.average-population');

totalPopulationSpan.textContent = totalPopulation.toLocaleString('en-US');
averagePopulationSpan.textContent = averagePopulation.toLocaleString('en-US');
