'use strict';

const populations = document.querySelectorAll('.population');
const selectorTotal = document.querySelector('.total-population');
const selectorAverage = document.querySelector('.average-population');

const totalPopulation = [...populations]
  .map(num => +num.innerText.replace(/,/g, ''))
  .reduce((acc, countryPopulation) => acc + countryPopulation, 0);

const averagePopulation = totalPopulation / [...populations].length;

selectorTotal.innerText = totalPopulation.toLocaleString();
selectorAverage.innerText = averagePopulation.toLocaleString();
