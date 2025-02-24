'use strict';

const populationElements = document.querySelectorAll('.population');

const populations = Array.from(populationElements).map((el) => {
  return Number(el.textContent.replace(/,/g, ''));
});

const totalPopulation = populations.reduce((sum, num) => sum + num, 0);

const averagePopulation = Math.round(totalPopulation / populations.length);

const formatNumber = (num) => num.toLocaleString();

document.querySelector('.total-population').textContent =
  formatNumber(totalPopulation);

document.querySelector('.average-population').textContent =
  formatNumber(averagePopulation);
