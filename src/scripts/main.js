'use strict';

const itemsText = document.querySelectorAll('.population');
const arrayText = [...itemsText].map(item => item.innerText);
const numbers = arrayText.map(item => +item.split(',').join(''));
const totalNumber = numbers.reduce((sum, current) => sum + current, 0);
const totalText = totalNumber.toFixed();
let totalTextSort = '';
let countTotal = 0;

for (let i = totalText.length - 1; i >= 0; i--) {
  countTotal++;
  totalTextSort += totalText[i];

  if (countTotal === 3 && i > 0) {
    totalTextSort += ',';
    countTotal = 0;
  }
}

const averageNumber = totalNumber / numbers.length;
const averageText = averageNumber.toFixed();
let averageTextSort = '';
let counterAverage = 0;

for (let i = averageText.length - 1; i >= 0; i--) {
  counterAverage++;
  averageTextSort += averageText[i];

  if (counterAverage === 3 && i > 0) {
    averageTextSort += ',';
    counterAverage = 0;
  }
}

const totalPopulation = totalTextSort.split('').reverse().join('');
const averagePopulation = averageTextSort.split('').reverse().join('');

document.querySelectorAll('.total-population')[0]
  .innerHTML = totalPopulation;

document.querySelectorAll('.average-population')[0]
  .innerHTML = averagePopulation;
