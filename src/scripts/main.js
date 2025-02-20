'use strict';

const populationElements = document.querySelectorAll('.population');
const populations = Array.from(populationElements).map((el) => el.textContent);

const populationNumbers = populations.map((pop) => {
  const number = parseFloat(pop.replace(/,/g, ''));

  return isNaN(number) ? 0 : number;
});

const totalPopulation = populationNumbers.reduce((acc, num) => acc + num, 0);
const averagePopulation = totalPopulation / populationNumbers.length;

function formatNumber(number) {
  return number.toLocaleString();
}

const totalPopulationElement = document.querySelector('.total-population');

if (totalPopulationElement) {
  totalPopulationElement.textContent = formatNumber(totalPopulation);
}

const averagePopulationElement = document.querySelector('.average-population');

if (averagePopulationElement) {
  averagePopulationElement.textContent = formatNumber(averagePopulation);
}
