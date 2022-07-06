'use strict';

const population = document.querySelectorAll('.population');
const totalCalculation = document.querySelector('.total-population');
const averageCalculation = document.querySelector('.average-population');

const populationByCountry = [...population].map(country =>
  +(country.innerText.split(',').join('')));
const totalPopulation = (populationByCountry.reduce((sum, x) => sum + x, 0));
const averagePopulation = (totalPopulation / populationByCountry.length);

totalCalculation.innerText = totalPopulation.toLocaleString('en-US');
averageCalculation.innerText = averagePopulation.toLocaleString('en-US');
