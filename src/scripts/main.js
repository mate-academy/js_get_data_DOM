'use strict';

const populationElements = document.querySelectorAll('.population');
const totalPopulationContainer = document.querySelector('.total-population');
const avgPopulationContainer = document.querySelector('.average-population');

const arrayContainer = [...populationElements].map((el) => {
  return Number(el.innerHTML.split(',').join(''));
});

const totalPopulation = arrayContainer.reduce((acc, el) => acc + el, 0);

const averagePopulation = Math.round(totalPopulation / arrayContainer.length);

totalPopulationContainer.innerHTML = totalPopulation.toLocaleString();
avgPopulationContainer.innerHTML = averagePopulation.toLocaleString();
