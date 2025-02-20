'use strict';

const populations = document.querySelectorAll('.population');

const populationNumbers = Array.from(populations).map((population) => {
  return parseInt(population.textContent.replace(/,/g, ''), 10);
});

const totalPopulation = populationNumbers.reduce((acc, num) => acc + num, 0);

const averagePopulation = Math.round(
  totalPopulation / populationNumbers.length,
);

function formatNumber(num) {
  return num.toLocaleString();
}

const totalPopulationElement = document.querySelector('.total-population');
const averagePopulationElement = document.querySelector('.average-population');

totalPopulationElement.textContent = formatNumber(totalPopulation);
averagePopulationElement.textContent = formatNumber(averagePopulation);
