'use strict';

const populationList = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

let total = 0;

populationList.forEach(population => {
  const count = population.textContent.split(',').join('');

  total += +count;
});

const avg = total / populationList.length;

totalPopulation.textContent = total.toLocaleString('en-US');

averagePopulation.textContent = avg.toLocaleString('en-US');
