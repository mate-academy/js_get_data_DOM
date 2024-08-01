'use strict';

// write your code here
const population = [...document.querySelectorAll('.population')];
const populationNumber = population.map(Number); 

let sum = 0;
let average = 0;

for (let i = 0; i < populationNumber.length; i++) {
  sum += population[i];
  average = sum / population.length;
}

document.querySelector('.total-population').innerHTML =
  sum.toLocaleString('en-US');

document.querySelector('.average-population').innerHTML =
  average.toLocaleString('en-US');
