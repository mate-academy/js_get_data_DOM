'use strict';

const population = [...document.querySelectorAll('.population')]
  .map(item => Number(item.innerText.split(',').join('')));

const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

total.innerText = population
  .reduce((acc, curr) => acc + curr);

average.innerText = population
  .reduce((acc, curr) => acc + curr) / population.length;
