'use strict';

const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');
const population = document.querySelectorAll('.population');
const totalPopulation = [...population].map(country => +country.innerHTML
  .replace(/,/g, '')).reduce((a, b) => a + b, 0);
const averagePopulation = totalPopulation / population.length;
let totalWithCommas = '';
let averageWithCommas = '';

for (let i = 0; i < String(totalPopulation).length; i++) {
  if (i % 3 === 0 && i !== 0) {
    totalWithCommas += ',';
  }

  totalWithCommas += String(totalPopulation).split('').reverse().join('')[i];
}

for (let i = 0; i < String(averagePopulation).length; i++) {
  if (i % 3 === 0 && i !== 0) {
    averageWithCommas += ',';
  }

  averageWithCommas += String(averagePopulation)
    .split('').reverse().join('')[i];
}

total.textContent = totalWithCommas.split('').reverse().join('');
average.textContent = averageWithCommas.split('').reverse().join('');
