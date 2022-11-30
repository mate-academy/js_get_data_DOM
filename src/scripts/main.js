'use strict';

const population = document.querySelectorAll('.population');

const total = [...population].map(item =>
  +item.innerText
    .split(',')
    .join('')).reduce((a, b) => a + b, 0);

const average = total / population.length;

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

totalPopulation.textContent = total.toLocaleString();
averagePopulation.textContent = average.toLocaleString();
