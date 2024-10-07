'use strict';

// write your code here
const populationElements = document.querySelectorAll('.population');

const populations = Array.from(populationElements).map((el) => {
  return parseInt(el.textContent.replace(/,/g, ''), 10);
});

const totalPopulation = populations.reduce((acc, val) => acc + val, 0);

const averagePopulation = totalPopulation / populations.length;

const formatNumber = (num) => num.toLocaleString();

document.querySelector('.total-population').textContent =
  formatNumber(totalPopulation);

document.querySelector('.average-population').textContent = formatNumber(
  Math.round(averagePopulation),
);
