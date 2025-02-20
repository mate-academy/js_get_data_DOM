'use strict';

const populationElements = document.querySelectorAll('.population');

const populations = Array.from(populationElements).map((element) => {
  return parseInt(element.textContent.replace(/,/g, ''), 10);
});

const totalPopulation = populations.reduce(
  (sum, population) => sum + population,
  0,
);
const avaragePopulation = Math.round(totalPopulation / populations.length);

const formatNumber = (number) => number.toLocaleString();

document.querySelector('.total-population').textContent =
  formatNumber(totalPopulation);

document.querySelector('.average-population').textContent =
  formatNumber(avaragePopulation);
