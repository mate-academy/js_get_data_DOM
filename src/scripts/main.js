'use strict';

const population = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const avg = document.querySelector('.average-population');
let totalSum = 0;

for (const countryPopulation of population) {
  const temp = countryPopulation.innerText.split(',').join('');

  totalSum += +temp;
}

total.innerText = totalSum.toLocaleString('en');
avg.innerText = (totalSum / population.length).toLocaleString('en');
