'use strict';

const population = [...document.querySelectorAll('.population')]
  .map(item => +item.innerHTML.split(',').join(''));

const averagePopulation = document.querySelector('.average-population');
const totalPopulation = document.querySelector('.total-population');

const total = population.reduce((sum, item) => sum + item);
const average = total / population.length;

averagePopulation.innerHTML = average.toLocaleString('en-US');
totalPopulation.innerHTML = total.toLocaleString('en-US');
