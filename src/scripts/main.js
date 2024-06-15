'use strict';

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const population = [...document.querySelectorAll('.population')];
const numberOfCountries = population.length;

const total = population
  .map((el) => el.textContent)
  .map((el) => el.replaceAll(',', ''))
  .map((el) => +el)
  .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

const average = total / numberOfCountries;

totalPopulation.textContent = total.toLocaleString('en-US');
averagePopulation.textContent = average.toLocaleString('en-US');
