'use strict';

const populationElements = document.querySelectorAll('.population');
const totalPopulationElem = document.querySelector('.total-population');
const averagePopulationElem = document.querySelector('.average-population');

const populationData = [...populationElements].map(population => {
  return population.innerText;
});

const totalPopulation = populationData.reduce((sum, population) => {
  const currentPopulation = +population.split(',').join('');

  return sum + currentPopulation;
}, 0);

const averagePopulation = totalPopulation / populationData.length;

totalPopulationElem.innerText = totalPopulation.toLocaleString('en-US');
averagePopulationElem.innerText = averagePopulation.toLocaleString('en-US');
