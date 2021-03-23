'use strict';

const population = document.querySelectorAll('.population');
const averagePopulation = document.querySelector('.total-population');
const totalPopulation = document.querySelector('.average-population');

const totalPopulationDate = [...population]
  .map(number => +number.textContent
    .replace(/,/g, ''))
  .reduce((acc, cur) => acc + cur, 0);

const averagePopulationDate = totalPopulationDate / population.length;

totalPopulation.textContent = totalPopulationDate.toLocaleString('en');
averagePopulation.textContent = averagePopulationDate.toLocaleString('en');
