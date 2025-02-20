'use strict';

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const elementsPopulation = [...document.querySelectorAll('.population')];

const total = elementsPopulation
  .map((el) => +el.textContent.split(',').join(''))
  .reduce((sum, num) => sum + num, 0);

const average = total / elementsPopulation.length;

totalPopulation.textContent = total.toLocaleString('en-US');
averagePopulation.textContent = average.toLocaleString('en-US');
