'use strict';

let population = 0;

const resultPopulation = document.querySelectorAll('li');

for (const key of resultPopulation) {
  const countrysPopulation = key.querySelector('.population');

  population += +countrysPopulation.innerText.split(',').join('');
}

const total = document.querySelector('.total-population');

total.innerText = new Intl.NumberFormat('en-us').format(population);

const averagePopulation = document.querySelector('.average-population ');

averagePopulation.innerText = new Intl.NumberFormat('en-us')
  .format(population / resultPopulation.length);
