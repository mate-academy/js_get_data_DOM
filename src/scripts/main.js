'use strict';

const populations = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

const countries = [];

for (const population of populations) {
  countries.push(+population.textContent.split(',').join(''));
}

const totalPopulation = countries.reduce((sum, prev) => sum + prev, 0);

total.textContent = totalPopulation.toLocaleString('en-EN');

average.textContent = (totalPopulation / countries.length)
  .toLocaleString('en-EN');
