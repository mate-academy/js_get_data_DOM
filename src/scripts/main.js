'use strict';

const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');
const allPopulation = [...document.querySelectorAll('.population')];
const populationValues = allPopulation.map((country) => {
  return country.textContent.split(',').join('');
});

const totalPopulationValue = populationValues.reduce(
  (sum, country) => sum + +country,
  0,
);
const averagePopulationValue = totalPopulationValue / allPopulation.length;

function getFormattedValue(value) {
  return value.toLocaleString('en-US');
}

total.textContent = getFormattedValue(totalPopulationValue);
average.textContent = getFormattedValue(averagePopulationValue);
