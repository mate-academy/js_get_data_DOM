'use strict';

const population = document.querySelectorAll('.population');
const averagePopulation = document.querySelector('.average-population');
const totalPopulation = document.querySelector('.total-population');

const totalPopulationInfo = [...population]
  .map(number => +number.textContent
    .replace(/,/g, ''))
  .reduce((acc, cur) => acc + cur, 0);

const averagePopulationInfo = totalPopulationInfo / population.length;

totalPopulation.textContent = totalPopulationInfo.toLocaleString('en');
averagePopulation.textContent = averagePopulationInfo.toLocaleString('en');
