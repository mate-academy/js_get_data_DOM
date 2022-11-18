'use strict';

const populationsList = document.querySelectorAll('.population');

let totalPopulation = 0;

populationsList.forEach(population => {
  totalPopulation += Number(population.textContent.split(',').join(''));
});

const avgPopulation = Math.trunc(totalPopulation / populationsList.length);

const avgElement = document.querySelector('.average-population');
const totalElement = document.querySelector('.total-population');

avgElement.textContent = avgPopulation.toLocaleString('en-US');
totalElement.textContent = totalPopulation.toLocaleString('en-US');
