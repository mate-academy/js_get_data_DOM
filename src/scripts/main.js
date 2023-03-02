'use strict';

const population = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const populationArr = [...population]
  .map(el => Number(el.textContent.split(',').join('')));

const total = populationArr.reduce((sum, cur) => sum + cur, 0);
const average = total / populationArr.length;

totalPopulation.textContent = total.toLocaleString('en-US');
averagePopulation.textContent = average.toLocaleString('en-US');
