'use strict';

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
const populations = document.querySelectorAll('.population');
let total = 0;

for (const population of populations) {
  const number = parseInt(population.innerText.replace(/,/g, ''));

  total += number;
}

totalPopulation.innerText = total.toLocaleString('en-US');

averagePopulation.innerText
  = (total / populations.length).toLocaleString('en-US');
