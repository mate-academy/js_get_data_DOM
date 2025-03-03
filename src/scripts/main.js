'use strict';

const populations = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
let total = 0;
let average = 0;

for (const population of populations) {
  total += +(population.innerText.split(',').join(''));
}

average = total / populations.length;

totalPopulation.innerText = total.toLocaleString('en-US');
averagePopulation.innerText = average.toLocaleString('en-US');
