'use strict';

// write your code here
const populationValuesArray = [];
const collectionOfPopulation = document.body.querySelectorAll('.population');

collectionOfPopulation.forEach(item => {
  const population = item.textContent.replaceAll(',', '');

  populationValuesArray.push(+population);
});

const totalPopulation
= populationValuesArray.reduce((sumPopulation, population) => {
  return sumPopulation + population;
}, 0);

const averagePopulation = totalPopulation / populationValuesArray.length;

const totalPopulationElement = document.querySelector('.total-population');

totalPopulationElement.textContent = totalPopulation.toLocaleString();

const averagePopulationElement = document.querySelector('.average-population');

averagePopulationElement.textContent = averagePopulation.toLocaleString();
