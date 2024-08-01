'use strict';

// write your code here
const population = [...document.querySelectorAll('.population')];

let sum = 0;
let average = 0;

for (let i = 0; i < population.length; i++) {
  let countryPopulation = Number(population[i]);
  sum += countryPopulation;
  average = sum / population.length;
}

document.querySelector('.total-population').innerHTML =
  sum.toLocaleString('en-US');

document.querySelector('.average-population').innerHTML =
  average.toLocaleString('en-US');
