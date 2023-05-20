'use strict';

const population = document.querySelectorAll('.population');
const numbers = [...population].map(item =>
  item.textContent.split(',').join('')
);

const total = numbers.reduce((prev, num) => prev + +num, 0);
const average = total / numbers.length;

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

totalPopulation.textContent = total.toLocaleString('en-US');
averagePopulation.textContent = average.toLocaleString('en-US');
