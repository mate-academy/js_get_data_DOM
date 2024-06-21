'use strict';

// write your code here

const populations = [...document.querySelectorAll('.population')];

const populationValues = populations.map((population) => {
  return +population.innerHTML.replace(/,/g, '');
});

const totalPopulation = populationValues.reduce(
  (acumulator, currentValue) => acumulator + currentValue,
  0,
);

const averagePopulation = totalPopulation / populationValues.length;

const totalPopulationSpan = document.querySelector('.total-population');
const averagePopulationSpan = document.querySelector('.average-population');

totalPopulationSpan.innerHTML = totalPopulation.toLocaleString('en-US');

averagePopulationSpan.innerHTML = averagePopulation.toLocaleString('en-US');
