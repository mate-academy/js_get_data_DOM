'use strict';

const population = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');
let sum = 0;

for (let i = 0; i < population.length; i++) {
  sum += parseInt(population[i].textContent.replace(/,/g, ''));
}

total.textContent = sum.toLocaleString();

average.textContent = (sum / population.length).toLocaleString();
