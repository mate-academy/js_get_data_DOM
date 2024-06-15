'use strict';

const population = [...document.querySelectorAll('.population')];
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const total = population
  .map((el) => +el.textContent.split(',').join(''))
  .reduce((num, sum) => num + sum, 0);

const average = total / population.length;

totalPopulation.textContent = total.toLocaleString('en - US');
averagePopulation.textContent = average.toLocaleString('en - US');
