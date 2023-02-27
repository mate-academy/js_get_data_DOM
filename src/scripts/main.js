'use strict';

const countries = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
let total = 0;
let average = 0;

for (const country of countries) {
  total += +country.innerText.split(',').join('');
}

average = total / countries.length;

totalPopulation.textContent = total.toLocaleString('en-US');
averagePopulation.textContent = average.toLocaleString('en-US');
