'use strict';

const population = document.querySelectorAll('.population');
let total = 0;

for (let i = 0; i < population.length; i++) {
  total += +population[i].innerText.split(',').join('');
}

const averagePopulation = total / population.length;

document.querySelector('.total-population').innerText = total;

document.querySelector('.average-population').innerText = averagePopulation;
