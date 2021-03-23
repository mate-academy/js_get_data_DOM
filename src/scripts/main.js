'use strict';

const spans = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
const arrayOfPopulationNumber = [...spans]
  .map(content => +content.innerText.split(',').join(''));

const totalPopulationResult = arrayOfPopulationNumber
  .reduce((a, b) => a + b, 0);
const length = spans.length;
const averagePopulationResult = totalPopulationResult / length;

totalPopulation.textContent = totalPopulationResult.toLocaleString('en-US');
averagePopulation.textContent = averagePopulationResult.toLocaleString('en-US');
