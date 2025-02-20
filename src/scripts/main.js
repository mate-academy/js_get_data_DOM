'use strict';

// write your code here
let population = [...document.querySelectorAll('.population')];
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

population = population.map((elem) => +elem.textContent.split(',').join(''));

const total = population.reduce(
  (sum, currentCountry) => sum + currentCountry,
  0,
);

const average = total / population.length;

totalPopulation.textContent = total.toLocaleString('en-US');
averagePopulation.textContent = average.toLocaleString('en-US');
