'use strict';

const population = document.querySelectorAll('span.population');
const normalizePopulation = [...population]
  .map(item => +item.textContent.split(',').join(''));

const total = normalizePopulation.reduce((sum, x) => sum + x, 0);

const totalPopulation = document.querySelector('.total-population');

totalPopulation.innerText = (normalizePopulation
  .reduce((sum, x) => sum + x, 0)).toLocaleString('en-US');

const averagePopulation = document.querySelector('.average-population');

averagePopulation.innerText
  = (total / normalizePopulation.length).toLocaleString('en-US');
