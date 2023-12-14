'use strict';

// write your code here
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');
const spans = document.querySelectorAll('.population');
let averagePopulation = 0;
let totalPopulation = 0;

for (const span of spans) {
  const stringPopulation = span.innerHTML;
  const numberPopulation = Number(stringPopulation.split(',').join(''));

  totalPopulation += numberPopulation;
}

averagePopulation = totalPopulation / spans.length;

total.textContent = totalPopulation.toLocaleString('en-US');
average.textContent = averagePopulation.toLocaleString('en-US');
