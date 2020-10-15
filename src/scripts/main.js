'use strict';

const total = [...document.querySelectorAll('.population')];
const totalPopulationElement = document.querySelector('.total-population');
const avaragePopulationElement = document.querySelector('.average-population');
const totalPopulation = total.reduce((sum, population) =>
  sum + +population.innerHTML.split(',').join(''), 0);

totalPopulationElement.innerHTML = totalPopulation.toLocaleString('en-EN');

avaragePopulationElement.innerHTML = Math.round(
  totalPopulation / total.length).toLocaleString('en-EN');
