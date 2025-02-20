'use strict';

// write your code here
const populationElements = document.querySelectorAll('.population');

const populations = [];

populationElements.forEach((el) => {
  const population = parseInt(el.textContent.replace(/,/g, ''));

  populations.push(population);
});

const totalPopulation = populations.reduce((sum, num) => sum + num, 0);
const averagePopulation = totalPopulation / populations.length;

const formatNumber = (num) => num.toLocaleString('en-US');

document.querySelector('.total-population').textContent =
  formatNumber(totalPopulation);

document.querySelector('.average-population').textContent =
  formatNumber(averagePopulation);
