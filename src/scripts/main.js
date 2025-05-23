'use strict';

const population = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

let totalPopulation = 0;
let averagePopulation = 0;

for (let i = 0; i < population.length; i++) {
  const populationNumber = +population[i].textContent.split(',').join('');

  totalPopulation += populationNumber;
}

averagePopulation = totalPopulation / population.length;

average.textContent = averagePopulation.toLocaleString('en');
total.textContent = totalPopulation.toLocaleString('en');
