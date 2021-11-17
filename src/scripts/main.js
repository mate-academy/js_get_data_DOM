'use strict';

const population = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const numbers = [...population]
  .map(number => parseInt(number.textContent.split(',').join('')));

const total = numbers.reduce((acc, val) => acc + val);
const average = total / numbers.length;

totalPopulation.textContent = total.toLocaleString();
averagePopulation.textContent = average.toLocaleString();
