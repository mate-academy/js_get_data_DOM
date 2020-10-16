'use strict';

const population = [...document.getElementsByClassName('population')];
const totalPopulationClass = document.querySelector('.total-population');
const averagePopulationClass = document.querySelector('.average-population');

const total = population.reduce((sum, currentPopulation) =>
  sum + +currentPopulation.innerHTML.split(',').join(''), 0);

const average = total / population.length;

totalPopulationClass.innerHTML = total.toLocaleString('en-EN');
averagePopulationClass.innerHTML = Math.round(average).toLocaleString('en-EN');
