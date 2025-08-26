'use strict';

const arrayPopulation = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

let sum = 0;
let count = 0;

for (const el of arrayPopulation) {
  const num = Number(el.textContent.replace(/,/g, ''));

  if (!isNaN(num)) {
    sum += num;
    count++;
  }
}

const average = count > 0 ? sum / count : 0;

totalPopulation.textContent = sum.toLocaleString();
averagePopulation.textContent = Math.round(average).toLocaleString();
