'use strict';

const totalPopulationElement = document.querySelector('.total-population');
const averagePopulationElement = document.querySelector('.average-population');
const population = Array.from(document.querySelectorAll('.population'))
  .map((e) => e.innerText.split(',').join(''))
  .map(str => Number(str));
const totalPopulation = population.reduce((sum, element) => sum + element, 0);

totalPopulationElement.innerText = totalPopulation.toLocaleString('en-US');

averagePopulationElement.innerText = (totalPopulation / population.length)
  .toLocaleString('en-Us');
