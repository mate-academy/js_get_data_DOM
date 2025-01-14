'use strict';

function formatNumber(num) {
  return num.toLocaleString('en-US');
}

const populationElements = document.querySelectorAll('.population');

const populations = Array.from(populationElements).map((el) => {
  const number = parseInt(el.textContent.replace(/,/g, ''), 10);

  return number;
});

const totalPopulation = populations.reduce((acc, curr) => acc + curr, 0);

const averagePopulation = totalPopulation / populations.length;

const totalPopulationElement = document.querySelector('.total-population');
const averagePopulationElement = document.querySelector('.average-population');

totalPopulationElement.textContent = formatNumber(totalPopulation);

averagePopulationElement.textContent = formatNumber(
  Math.round(averagePopulation),
);
