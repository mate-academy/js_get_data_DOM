'use strict';

const population = document.querySelectorAll('.population');
const totalValue = document.querySelector('.total-population');
const averageValue = document.querySelector('.average-population');

const totalPopulation = [...population]
  .map(item => +item.innerHTML.split(',').join(''))
  .reduce((a, b) => a + b);

const averagePopulation = Math.round(totalPopulation / population.length);

totalValue.innerHTML = totalPopulation.toLocaleString();
averageValue.innerHTML = averagePopulation.toLocaleString();
