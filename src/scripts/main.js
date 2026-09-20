'use strict';

const populations = document.querySelectorAll('.population');
const populationNumbers = [...populations].map((item) => {
  return Number(item.textContent.split(',').join(''));
});

const totalPopulation = populationNumbers.reduce((sum, number) => {
  return sum + number;
}, 0);

const averagePopulation = totalPopulation / populationNumbers.length;

const averageElement = document.querySelector('.average-population');
const totalElement = document.querySelector('.total-population');

averageElement.textContent = averagePopulation.toLocaleString('en-US');
totalElement.textContent = totalPopulation.toLocaleString('en-US');
