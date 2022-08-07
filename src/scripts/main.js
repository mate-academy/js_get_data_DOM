'use strict';

const populations = document.querySelectorAll('.population');
const populationsArray = [...populations].map((number) =>
  +number.textContent.split(',').join(''));

const totalPopulation = populationsArray.reduce((sum, number) =>
  sum + number, 0);

const averagePopulation = totalPopulation / populationsArray.length;

const totalPopulationResult = document.querySelector('.total-population');
const averagePopulationResult = document.querySelector('.average-population');

totalPopulationResult.textContent = totalPopulation.toLocaleString('en-US');
averagePopulationResult.textContent = averagePopulation.toLocaleString('en-US');
