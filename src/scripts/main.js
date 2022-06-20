'use strict';

const population = document.querySelectorAll('.population');
const total = [];

for (let i = 0; i < population.length; i++) {
  const populationToNumber = Number(population[i].innerHTML
    .split(',').join(''));

  total.push(populationToNumber);
}

const sum = total.reduce((a, b) => a + b, 0);
const average = sum / total.length;

document.querySelector('.total-population')
  .textContent = sum;

document.querySelector('.average-population')
  .textContent = average;
