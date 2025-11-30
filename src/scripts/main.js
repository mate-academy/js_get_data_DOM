'use strict';

// write your code here
const populationEl = document.querySelectorAll('.population');
const totalPop = document.querySelector('.total-population');
const averagePop = document.querySelector('.average-population');
let totalPopulation = 0;

for (let i = 0; i < populationEl.length; i++) {
  const text = populationEl[i].textContent;
  const cleanText = text.split(',').join('');
  const number = Number(cleanText);

  if (!isNaN(number)) {
    totalPopulation += number;
  }
}

const averagePopulation = totalPopulation / populationEl.length;

totalPop.textContent = totalPopulation.toLocaleString('en-US');

averagePop.textContent = averagePopulation.toLocaleString('en-US', {
  maximumFractionDigits: 0,
});
