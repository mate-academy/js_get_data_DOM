'use strict';

const allCountries = document.querySelectorAll('.population');
const allOfCountries = [...allCountries];
const sumOfPopulation = allOfCountries.reduce((sum, countrysPopulation) =>
  sum + +countrysPopulation.innerText.replaceAll(',', ''), 0);
const averagePopulation = sumOfPopulation / allOfCountries.length;

document.querySelector('.total-population').innerText
  = sumOfPopulation.toLocaleString('en-US');

document.querySelector('.average-population').innerText
  = averagePopulation.toLocaleString('en-US');
