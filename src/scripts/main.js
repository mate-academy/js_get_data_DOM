'use strict';

const allPopulation = document.querySelectorAll('.population');

const population = [...allPopulation].map(
  item => +item.textContent.split(',').join('')
);

const totalValue = population.reduce((sum, x) => sum + x);
const averageValue = totalValue / population.length;

const averagePopulation = document.querySelector('.average-population');
const totalPopulation = document.querySelector('.total-population');

averagePopulation.textContent = averageValue.toLocaleString('en-US');
totalPopulation.textContent = totalValue.toLocaleString('en-US');
