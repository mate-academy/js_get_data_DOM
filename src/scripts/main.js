'use strict';

const listItems = document.querySelectorAll('.population');
const totalPopulationEl = document.querySelector('.total-population');
const averagePopulationEl = document.querySelector('.average-population');

const listOfPopulations = [...listItems].map(item =>
  +item.innerText
    .split(',')
    .join(''));

const totalPopulation = listOfPopulations.reduce((sum, popul) => sum + popul);
const averagePopulation = totalPopulation / listOfPopulations.length;
const numberAfterPoint = 0;

totalPopulationEl.textContent = totalPopulation
  .toLocaleString('en-US', { minimumFractionDigits: numberAfterPoint });

averagePopulationEl.textContent = averagePopulation
  .toLocaleString('en-US', { minimumFractionDigits: numberAfterPoint });
