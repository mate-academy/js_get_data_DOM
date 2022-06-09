'use strict';

const countries = [...document.querySelectorAll('.population')];
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
const total = countries
  .map(country => Number(country.innerText.split(',').join('')))
  .reduce((sum, x) => sum + x, 0);
const average = total / countries.length;

totalPopulation.innerText = total.toLocaleString();
averagePopulation.innerText = average.toLocaleString();
