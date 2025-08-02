'use strict';

const population = [...document.getElementsByClassName('population')];
const numbers = [];
let sum = 0;

for (let q = 0; q < population.length; q++) {
  numbers.push(population[q].innerText);
}

for (let w = 0; w < numbers.length; w++) {
  numbers[w] = parseInt(numbers[w].split(',').join(''));
  sum += numbers[w];
}

const chislo = sum / numbers.length;

const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

average.innerText = chislo.toLocaleString('en-US');
total.innerText = sum.toLocaleString('en-US');
