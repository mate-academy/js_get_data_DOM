'use strict';

const items = document.querySelectorAll('.population');
const allPopulation = [...items].map(item => item.innerText);

const total = allPopulation
  .map(population => +population.split(',').join(''))
  .reduce((a, b) => a + b);

const average = total / allPopulation.length;

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

totalPopulation.textContent = total.toLocaleString('en-US');
averagePopulation.textContent = average.toLocaleString('en-US');
