'use strict';

const population = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const avaragePopulation = document.querySelector('.average-population');

let total = 0;
let average = 0;

for (const count of population) {
  total += Number(count.innerHTML.split(',').join(''));
  average = total / population.length;
}

totalPopulation.textContent = total;
avaragePopulation.textContent = average;
