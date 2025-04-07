'use strict';

// write your code here
let sum = 0;

const getPopulation = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

getPopulation.forEach((item) => {
  const population = item.textContent;

  sum += Number(population.replaceAll(',', ''));
});

const averagePopulation = sum / getPopulation.length;

total.textContent = sum.toLocaleString('en-US');

average.textContent = averagePopulation.toLocaleString('en-US');
