'use strict';

const items = document.getElementsByClassName('population');

let totalSum = 0;

for (const item of items) {
  totalSum += Number(item.innerHTML.split(',').join(''));
}

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

totalPopulation.innerHTML = totalSum;
averagePopulation.innerHTML = Math.round(totalSum / items.length);
