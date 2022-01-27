'use strict';

const population = document.querySelectorAll('.population');
let sum = 0;

for (const countryPopulation of population) {
  sum += (+countryPopulation.textContent.split(',').join(''));
}

const result = sum.toLocaleString('en');
const average = (sum / population.length).toLocaleString('en');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

totalPopulation.textContent = result;
averagePopulation.textContent = average;
