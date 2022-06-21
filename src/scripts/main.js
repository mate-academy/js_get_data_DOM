'use strict';

const countriesPopulation = document.querySelectorAll('.population');
const populationData = [...countriesPopulation]
  .map(populationValue => populationValue.innerText);

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

function showGeneralPopulationInfo(populations) {
  const totalPopulationField = document.querySelector('.total-population');
  const averagePopulationField = document.querySelector('.average-population');

  const totalPopulation = getTotalPopulation(populations);
  const averagePopulation = getAveragePopulation(populations);

  totalPopulationField.textContent = getCommaFormat(totalPopulation);
  averagePopulationField.textContent = getCommaFormat(averagePopulation);
}

showGeneralPopulationInfo(populationData);
