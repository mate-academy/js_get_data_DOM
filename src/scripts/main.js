'use strict';

const populationElements = document.querySelectorAll('.population');
const populations = [];

populationElements.forEach((element) => {
  const population = parseInt(element.textContent.replace(/,/g, ''), 10);

  populations.push(population);
});

const totalPopulation = populations.reduce((sum, num) => sum + num, 0);
const averagePopulation = Math.round(totalPopulation / populations.length);

const formatNumber = (number) =>
  number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

document.querySelector('.total-population').textContent =
  formatNumber(totalPopulation);

document.querySelector('.average-population').textContent =
  formatNumber(averagePopulation);
