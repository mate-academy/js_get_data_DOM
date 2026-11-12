'use strict';

const populations = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

let sum = 0;
let validPopulation = 0;

for (const element of populations) {
  const convertToNumber = +element.textContent.replaceAll(',', '');

  if (!Number.isNaN(convertToNumber)) {
    sum += convertToNumber;
    validPopulation++;
  }
}

total.textContent = sum.toLocaleString('en-US');

average.textContent = Math.round(sum / validPopulation).toLocaleString('en-US');
