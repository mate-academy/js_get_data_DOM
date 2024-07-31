'use strict';

const population = document.querySelectorAll('.population');
const averagePopulation = document.querySelector('.average-population');
const totalPopulation = document.querySelector('.total-population');

const countOfPopulation = [...population]
  .map((country) => +country.textContent.replace(/,/g, ''))
  .reduce((a, b) => a + b, 0);

const averageQuantityOfPopulation = countOfPopulation / population.length;

totalPopulation.textContent = countOfPopulation.toLocaleString('en');

averagePopulation.textContent =
  averageQuantityOfPopulation.toLocaleString('en');
