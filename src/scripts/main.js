'use strict';

const spansWithPopulationClass = document.querySelectorAll('span.population');

const allPopulation = [...spansWithPopulationClass]
  .map(item => +(item.innerText.replace(/,/g, '')));

const totalPopulation = allPopulation.reduce(
  (accumulator, population) => accumulator + population
);

const averagePopulation = totalPopulation / allPopulation.length;

document.querySelector('.total-population').innerText
= totalPopulation.toLocaleString('en-US');

document.querySelector('.average-population').innerText
= averagePopulation.toLocaleString('en-US');
