'use strict';

const populations = [...document.querySelectorAll('.population')]
  .map(item => +item.textContent.split(',').join(''));

const totalPopulation = populations.reduce((sum, item) => sum + item);
const averagePopulation = totalPopulation / populations.length;

const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

total.textContent = totalPopulation.toLocaleString('en-US');
average.textContent = averagePopulation.toLocaleString('en-US');
