'use strict';

// write your code here
const population = document.querySelectorAll('.population');
const averagePopulation = document.querySelector('.average-population');
const totallPopulation = document.querySelector('.total-population');

const totallPopulationData = [...population]
  .map(number => +number.textContent
    .replace(/,/g, ''))
  .reduce((acc, curr) => acc + curr, 0);

const averagePopulationData = totallPopulationData / population.length;

totallPopulation.textContent = totallPopulationData.toLocaleString('en');
averagePopulation.textContent = averagePopulationData.toLocaleString('en');
