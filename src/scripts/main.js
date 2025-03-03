'use strict';

const population = [...document.querySelectorAll('.population')];

const totalPopulation = population
  .map(item => +(item.innerText.replace(/[\s.,]/g, '')))
  .reduce((a, b) => a + b);
const averagePopulation = totalPopulation / population.length;

const totalElement = document.querySelector('.total-population');

totalElement.innerHTML = totalPopulation.toLocaleString();

const averageElement = document.querySelector('.average-population');

averageElement.innerHTML = averagePopulation.toLocaleString();
