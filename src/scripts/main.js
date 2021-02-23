'use strict';

// write your code here
const population = document.querySelectorAll('.population');

let sum = 0;

for (let i = 0; i < population.length; i++) {
  sum += +population[i].textContent.split(',').join('');
}

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

totalPopulation.innerHTML = sum.toLocaleString('en');
averagePopulation.innerHTML = (sum / population.length).toLocaleString('en');
