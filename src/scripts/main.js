'use strict';

const population = [...document.querySelectorAll('.population')];

function parsePopulation(populationElement) {
  const num = Number(populationElement.textContent.replaceAll(',', ''));

  return isNaN(num) ? 0 : num;
}

const populationValues = population.map((el) => parsePopulation(el));

const totalPopulation = populationValues.reduce((sum, value) => sum + value, 0);

const averagePopulation = totalPopulation / populationValues.length;

document.querySelector('.total-population').innerHTML =
  totalPopulation.toLocaleString('en-US');

document.querySelector('.average-population').innerHTML =
  averagePopulation.toLocaleString('en-US');
