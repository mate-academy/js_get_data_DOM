'use strict';

// write your code here
const population = Array.from(document.querySelectorAll('.population')).map((element) => {
  return parseInt(element.textContent.replace(/,/g, ''), 10);
});

const totalPopulationBlock = document.querySelector('.total-population');
const averagePopulationBlock = document.querySelector('.average-population');

const totalPopulation = population.reduce((acc, curr) => acc + curr, 0);
const averagePopulation = totalPopulation / population.length;

totalPopulationBlock.textContent = totalPopulation.toLocaleString();
averagePopulationBlock.textContent = averagePopulation.toLocaleString(undefined, { maximumFractionDigits: 0 });
