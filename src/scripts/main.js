'use strict';

const elements = document.querySelectorAll('span.population');
const arr = [...elements].map(item =>
  +item.textContent.split(',').join(''));

const total = arr.reduce((sum, x) => sum + x, 0);

const totalPopulation = document.querySelector('.total-population');

totalPopulation.innerText = (arr.reduce((sum, x) =>
  sum + x, 0)).toLocaleString('en-US');

const averagePopulation = document.querySelector('.average-population');

averagePopulation.innerText = (total / arr.length).toLocaleString('en-US');
