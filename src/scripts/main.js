'use strict';

const getCountries = [...document.querySelectorAll('.population')];
const getPopulationCountries = getCountries.map(country => {
  return Number(country.innerHTML.split(',').join(''));
});
const getTotalPopulationCountries = getPopulationCountries
  .reduce((totalPopulation, currentPopulation) =>
    totalPopulation + currentPopulation);
const getAveragePopulation = getTotalPopulationCountries / getCountries.length;

document
  .querySelector('.total-population').innerHTML = getTotalPopulationCountries
    .toLocaleString()
    .replace(/\s/g, ',');

document
  .querySelector('.average-population').innerHTML = getAveragePopulation
    .toLocaleString()
    .replace(/\s/g, ',');
