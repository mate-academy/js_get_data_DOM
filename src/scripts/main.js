'use strict';

const population = [...document.querySelectorAll('.population')]
  .map(item => +item.innerHTML.split(',').join(''))
  .filter(item => isFinite(item));

const totalPopulation = population.reduce((acc, current) => acc + current, 0);
const averagePopulation = totalPopulation / population.length;
const totalPopulationHTML = document.querySelector('.total-population');
const averagePopulationHTML = document.querySelector('.average-population');

totalPopulationHTML.textContent = new Intl.NumberFormat('en-GB')
  .format(totalPopulation);

averagePopulationHTML.textContent = new Intl.NumberFormat('en-GB')
  .format(averagePopulation);
