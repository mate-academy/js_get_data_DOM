'use strict';

const collection = document.querySelectorAll('.population');

let sum = 0;

for (const item of collection) {
  const y = +item.innerText.split(',').join('');

  sum += y;
}

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
const finalTotalSum = new Intl.NumberFormat('en-US').format(sum);

totalPopulation.innerText = finalTotalSum;

const averageSum = sum / collection.length;
const finalAverageSum = new Intl.NumberFormat('en-US').format(averageSum);

averagePopulation.innerText = finalAverageSum;
