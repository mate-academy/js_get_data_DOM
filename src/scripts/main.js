'use strict';

const population = document.querySelectorAll('.population');

const populationNumbers = [...population].map(
  item => Number(item.innerText.replace(/[,]/g, ''))
);

const totalPopulation = populationNumbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue, 0
);

const averagePopulation = totalPopulation / populationNumbers.length;

const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

total.innerText = totalPopulation.toLocaleString('en-EN');
average.innerText = averagePopulation.toLocaleString('en-EN');
