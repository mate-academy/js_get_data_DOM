'use strict';

const population = [...document.querySelectorAll('.population')];
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const resultPopulation = population
  .map(populations => +populations.innerText.split(',').join(''))
  .reduce((sum, people) => sum + people, 0);

const averageResult = resultPopulation / population.length;

totalPopulation.innerText = resultPopulation.toLocaleString('en');
averagePopulation.innerText = averageResult.toLocaleString('en');
