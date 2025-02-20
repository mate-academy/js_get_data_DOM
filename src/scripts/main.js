'use strict';

const population = document.querySelectorAll('.population');
const numbers = [...population]
  .map(item => +item.innerText.split(',').join(''));

const total = numbers.reduce((sum, x) => sum + x, 0);
const average = total / numbers.length;

const totalPopulation = document.querySelector('.total-population');

totalPopulation.innerText = total.toLocaleString('en-US');

const averagePopulation = document.querySelector('.average-population');

averagePopulation.innerText = average.toLocaleString('en-US');
