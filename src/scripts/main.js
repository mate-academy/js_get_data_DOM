'use strict';

// write your code here
let sum = 0;
const populations = document.querySelectorAll('.population');

for (const item of populations) {
  sum += +item.textContent.replaceAll(',', '');
}

let averege = 0;

averege = sum / populations.length;

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

totalPopulation.textContent = sum.toLocaleString();
averagePopulation.textContent = averege.toLocaleString();
