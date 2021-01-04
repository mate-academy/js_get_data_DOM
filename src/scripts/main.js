'use strict';

const element = document.getElementsByClassName('population');

const getPopulation = [...element].map(population =>
  +(population.innerText.split(',').join('')));

const totalPopulation = getPopulation.reduce((acc, value) => acc + value);
const averagePopulation = totalPopulation / getPopulation.length;

document.getElementsByClassName('total-population')[0]
  .innerHTML = totalPopulation.toLocaleString('en-US');

document.getElementsByClassName('average-population')[0]
  .innerHTML = averagePopulation.toLocaleString('en-US');
