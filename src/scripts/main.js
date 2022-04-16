'use strict';

const countries = [...document.querySelectorAll('.population')];

const totalPopulation = countries
  .map(country => Number(country.innerText.split(',').join('')))
  .reduce((sum, residents) => sum + residents, 0);

const averagePopulation = totalPopulation / countries.length;

const totalResult = document.querySelector('.total-population');
const averageResult = document.querySelector('.average-population');

totalResult.innerText = totalPopulation.toLocaleString();
averageResult.innerText = averagePopulation.toLocaleString();
