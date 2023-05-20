'use strict';

const countries = [...document.querySelectorAll('.population')];
const population = countries.map(Population =>
  +Population.innerText.split(',').join(''));
const totalPopulation = population.reduce((el, sum) => el + sum, 0);
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

total.textContent = totalPopulation.toLocaleString('en-US');

average.textContent = (totalPopulation / population.length)
  .toLocaleString('en-US');

// write your code here
