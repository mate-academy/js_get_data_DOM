'use strict';

const textPopulation = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

let count = 0;

for (const item of textPopulation) {
  count += +item.innerText.replace(/,/g, '');
}

const result = count / textPopulation.length;

total.textContent = count.toLocaleString('en-US');
averagePopulation.textContent = result.toLocaleString('en-US');
