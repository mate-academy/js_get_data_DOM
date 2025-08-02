'use strict';

const population = [...document.getElementsByClassName('population')];
const numbers = [];
let sum = 0;

for (let q = 0; q < population.length; q++) {
  const numStr = population[q].innerText.replace(/,/g, '');
  const num = parseInt(numStr, 10);

  if (!isNaN(num)) {
    numbers.push(num);
    sum += num;
  }
}

const chislo = sum / numbers.length;

const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

average.innerText = chislo.toLocaleString('en-US');
total.innerText = sum.toLocaleString('en-US');
