'use strict';

const totalPopulationElem = document.querySelector('.total-population');
const avgPopulationElem = document.querySelector('.average-population');

const populationElements = document.querySelectorAll('.population');

const populationList = [...populationElements].map(population => {
  return population.innerText;
});

const totalPopulation = populationList.reduce((sum, population) => {
  const currPopulation = +population.split(',').join('');

  return sum + currPopulation;
}, 0);

const avgPopulation = totalPopulation / populationList.length;

totalPopulationElem.innerText = totalPopulation.toLocaleString('en-US');
avgPopulationElem.innerText = avgPopulation.toLocaleString('en-US');
