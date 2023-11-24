'use strict';

const allCountriesPopulation = [...document.querySelectorAll('.population')];
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const totalPopulationNumber = allCountriesPopulation
  .map(country => Number(country.textContent.split(',').join('')))
  .reduce((prev, acc) => prev + acc, 0);
const averagePopulationNumber = totalPopulationNumber
  / allCountriesPopulation.length;

totalPopulation.innerHTML = totalPopulationNumber.toLocaleString('en-US');
averagePopulation.innerHTML = averagePopulationNumber.toLocaleString('en-US');
