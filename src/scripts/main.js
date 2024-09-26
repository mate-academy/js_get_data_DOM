'use strict';

const populationSpan = document.querySelectorAll('.population');
const totalPopulationSpan = document.querySelector('.total-population');
const averagePopulationSpan = document.querySelector('.average-population');

const totalPopulation = [...populationSpan].reduce((sum, number) => {
  return sum + Number(number.textContent.split(',').join(''));
}, 0);

const averagePopulation = totalPopulation / populationSpan.length;

totalPopulationSpan.textContent = totalPopulation.toLocaleString();
averagePopulationSpan.textContent = averagePopulation.toLocaleString();
