'use strict';

// write your code here

const populationElements = document.querySelectorAll('.population');

const populations = Array.from(populationElements).map((el) => {
  const number = Number(el.textContent.replace(/,/g, ''));

  return !isNaN(number) ? number : 0;
});

const totalPopulation = populations.reduce((sum, num) => sum + num, 0);
const averagePopulation = totalPopulation / populations.length;

const formatNumber = (num) => num.toLocaleString('en-US');

document.querySelector('.total-population').textContent =
  formatNumber(totalPopulation);

document.querySelector('.average-population').textContent = formatNumber(
  Math.round(averagePopulation),
);
