'use strict';

const population = [...document.querySelectorAll('.population')]
  .map(item => Number(item.innerText.split(',').join('')));

const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

const totalPopulation = population.reduce((acc, curr) => acc + curr);
const averagePopulation = totalPopulation / population.length;

total.innerText = totalPopulation.toLocaleString('en-US');
average.innerText = averagePopulation.toLocaleString('en-US');
