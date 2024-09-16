'use strict';

let population = document.querySelectorAll('span');

population = document.querySelectorAll('.population');

population = [...population];

population = population.map(item => {
  const numb = item.textContent.split(',').join('');

  return +numb;
});

const total = population.reduce((a, b) => a + b);
const average = total / population.length;

const totalPopulation = document.querySelector('.total-population');

totalPopulation.textContent = total.toLocaleString('en-US');

const averagePopulation = document.querySelector('.average-population');

averagePopulation.textContent = average.toLocaleString('en-US');
