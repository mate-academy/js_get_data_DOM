'use strict';

let population = [...document.querySelectorAll('.population')];
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

population = population.map((country) => {
  const normalNumber = country.textContent.replaceAll(',', '');

  return parseInt(normalNumber);
});

const sumAllPopulation = population.reduce((total, country) => {
  return total + country;
}, 0);
const averagePopulationValue = sumAllPopulation / population.length;

totalPopulation.textContent = sumAllPopulation.toLocaleString('en-US');

averagePopulation.textContent = averagePopulationValue.toLocaleString('en-US');
