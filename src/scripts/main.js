'use strict';

const populationSpans = document.querySelectorAll('.population');
const populationArr = [...populationSpans].map((population) =>
  population.innerText);

const totalPopulation = populationArr.reduce((sum, population) => {
  const currPopulation = +population.split(',').join('');

  return sum + currPopulation;
}, 0);
const avgPopulation = totalPopulation / populationArr.length;

const avgPopulationEl = document.querySelector('.average-population');
const totalPopulationEl = document.querySelector('.total-population');

avgPopulationEl.innerText = avgPopulation.toLocaleString('en-US');
totalPopulationEl.innerText = totalPopulation.toLocaleString('en-US');
