'use strict';

const CountriesPopulation = document.querySelectorAll('.population');
const populationData = [...CountriesPopulation].map(number => number.innerText);

function getTotalPopulation(populations) {
  return populations
    .map(el => +el.replaceAll(',', ''))
    .reduce((total, population) => total + population);
}

function getAveragePopulation(populations) {
  return getTotalPopulation(populations) / populations.length;
}

function getCommaFormat(num) {
  return new Intl.NumberFormat('en-US', { style: 'decimal' }).format(num);
}

function showTotalPopulation(populations) {
  const totalPopulationField = document.querySelector('.total-population');
  const totalPopulation = getTotalPopulation(populations);

  totalPopulationField.textContent = getCommaFormat(totalPopulation);
}

function showAveragePopulation(populations) {
  const averagePopulationField = document.querySelector('.average-population');
  const averagePopulation = getAveragePopulation(populations);

  averagePopulationField.textContent = getCommaFormat(averagePopulation);
}

showTotalPopulation(populationData);
showAveragePopulation(populationData);
