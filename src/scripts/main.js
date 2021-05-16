'use strict';

const population = document.querySelectorAll('.population');
const total = document.querySelector('.average-population');
const avg = document.querySelector('.total-population');
let totalSum = 0;

for (const countryPopulation of population) {
  const temp = countryPopulation.innerText.split(',').join('');

  totalSum += +temp;
}

total.innerText = totalSum.toLocaleString('en');
avg.innerText = (totalSum / population.length).toLocaleString('en');
