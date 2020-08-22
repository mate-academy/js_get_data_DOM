'use strict';

const population = document.querySelectorAll('.population');
const countriesQuantity = population.length;

const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

let totalPopulation = [...population]
  .map(element => +element.innerText.replace(/[,]+/g, ''))
  .reduce((a, b) => a + b);
let averagePopulation = totalPopulation / countriesQuantity;

totalPopulation = totalPopulation.toString().split('');
averagePopulation = averagePopulation.toString().split('');

for (let i = totalPopulation.length - 3, j = averagePopulation.length - 3;
  i > 0 || j > 0; i -= 3, j -= 3) {
  if (i !== 0) {
    totalPopulation.splice(i, 0, ',');
  }

  if (j !== 0) {
    averagePopulation.splice(j, 0, ',');
  }
}

total.innerHTML = totalPopulation.join('');
average.innerHTML = averagePopulation.join('');
