'use strict';

const averagePopulationSpan = document.querySelector('.average-population');
const totalPopulationSpan = document.querySelector('.total-population');
const spanArray = [...document.querySelectorAll('.population')];

const populationArray = spanArray.map(
  (span) => +span.innerHTML.replaceAll(',', '')
);

const totalPopulation = populationArray.reduce(
  (prev, current) => prev + current,
  0
);
const averagePopulation = totalPopulation / populationArray.length;

averagePopulationSpan.textContent = averagePopulation.toLocaleString('en-US');
totalPopulationSpan.textContent = totalPopulation.toLocaleString('en-US');
