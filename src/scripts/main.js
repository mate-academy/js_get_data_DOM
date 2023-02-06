'use strict';

const spanText = document.querySelectorAll('.population');
const sumText = document.querySelector('.total-population');
const averageText = document.querySelector('.average-population');

let sum = 0;
let count = 0;

for (const text of spanText) {
  const population = text.textContent.split(',').join('');

  sum += +population;
  count++;
}

const averagePopulation = sum / count;

sumText.textContent = `${sum.toLocaleString('en-US')}`;
averageText.textContent = `${averagePopulation.toLocaleString('en-US')}`;
// write your code here
