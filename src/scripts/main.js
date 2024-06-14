'use strict';

const population = [...document.querySelectorAll('.population')];
const totalPopulation = document.querySelector('.total-population');
const avaragePopulation = document.querySelector('.average-population');

const total = population
  .map((el) => +el.textContent.split(',').join(''))
  .reduce((sum, num) => sum + num, 0);

const avarege = total / population.length;

totalPopulation.textContent = total.toLocaleString('en-US');
avaragePopulation.textContent = avarege.toLocaleString('en-US');
