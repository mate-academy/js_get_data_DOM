'use strict';

// write your code here
const populationElements = document.querySelectorAll('.population');

const populations = Array.from(populationElements).map((el) => {
  const number = parseInt(el.textContent.replace(/,/g, ''));

  return !isNaN(number) ? number : 0;
});

const totalPopulation = populations.reduce((sum, num) => sum + num, 0);

const averagePopulation = totalPopulation / populations.length;

function formatNumber(number) {
  return number.toLocaleString();
}

document.querySelector('.average-population').textContent = formatNumber(
  Math.round(averagePopulation),
);

document.querySelector('.total-population').textContent =
  formatNumber(totalPopulation);
