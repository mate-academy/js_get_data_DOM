'use strict';

const populations = document.querySelectorAll('.population');
const total = [...populations]
  .map(num => +num.textContent.split(',').join(''))
  .reduce((acc, num) => acc + num, 0);

const average = total / populations.length;

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

totalPopulation.textContent = total.toLocaleString('En');
averagePopulation.textContent = average.toLocaleString('En');
