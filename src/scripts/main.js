'use strict';

const populations = document.querySelectorAll('.population');

let result = [];
let sum = 0;
let average = 0;

populations.forEach(population => {
  const item = population.textContent.replace(/,/g, '');
  const populationNumber = Number(item);
  result.push(populationNumber);
});

for (let i = 0; i < result.length; i++) {
  sum += result[i];
  average = sum / result.length;
}

const totalSpan = document.querySelector('.total-population');
const averageSpan = document.querySelector('.average-population');

totalSpan.textContent = sum.toLocaleString();
averageSpan.textContent = average.toLocaleString();
