'use strict';

const listPopulation = document.querySelectorAll('.population');
let total = 0;

for (const population of listPopulation) {
  const num = population.textContent;

  total += parseInt(num.split(',').join(''));
}

const totalSpan = document.querySelector('.total-population');
const averageSpan = document.querySelector('.average-population');

totalSpan.textContent = total;
averageSpan.textContent = total / listPopulation.length;
