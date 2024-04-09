'use strict';

const population = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

const countriesPopulation = [...population].map((country) => {
  return +country.textContent.split(',').join('');
});

const totalPopulation = countriesPopulation.reduce((sum, i) => sum + i);
const averagePopulation = totalPopulation / countriesPopulation.length;

total.textContent = totalPopulation.toLocaleString('en-US');
average.textContent = averagePopulation.toLocaleString('en-US');
