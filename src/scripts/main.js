'use strict';

const populationElements = document.querySelectorAll('.population');

const populationList = [...populationElements].map((element) => {
  const population = +element.innerHTML.split(',').join('');

  return population;
});

const totalPopulation = populationList.reduce((sum, item) => {
  return sum + item;
}, 0);

const averagePopulation = totalPopulation / populationList.length;

const totalPopulationElement = document.querySelector('.total-population');
const averagePopulationElement = document.querySelector('.average-population');

totalPopulationElement.innerHTML = totalPopulation.toLocaleString('en-US');
averagePopulationElement.innerHTML = averagePopulation.toLocaleString('en-US');
