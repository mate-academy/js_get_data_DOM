'use strict';

const populations = document.querySelectorAll('.population');
const averagePopulation = document.querySelector('.average-population');
const totalPopulation = document.querySelector('.total-population');

let total = 0;
let average = 0;

for (const elem of populations) {
  const value = parseInt(elem.innerHTML.replaceAll(',', '').trim());

  if (!isNaN(value)) {
    total += value;
  }
}

average = total / populations.length;

function formatNumber(num) {
  return num.toLocaleString('en-US');
}

averagePopulation.innerHTML = formatNumber(average);
totalPopulation.innerHTML = formatNumber(total);
