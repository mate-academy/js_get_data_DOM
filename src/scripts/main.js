'use strict';

const nation = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
let total = 0;
let count = 0;

for (const population of nation) {
  total += +population.textContent.replace(/,/g, '');
  count++;
}

totalPopulation.textContent = total.toLocaleString('en-ES');
averagePopulation.textContent = (total / count).toLocaleString('en-ES');
