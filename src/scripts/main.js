'use strict';

let population = 0;

const result = document.querySelectorAll('li');

for (const key of result) {
  const countrysPopulation = key.querySelector('.population');

  population += +countrysPopulation.innerText.split(',').join('');
}

const total = document.querySelector('.total-population');

total.innerText = new Intl.NumberFormat('en-us').format(population);

const averagePopulation = document.querySelector('.average-population ');

averagePopulation.innerText = new Intl.NumberFormat('en-us')
  .format(population / result.length);
