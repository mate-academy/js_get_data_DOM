'use strict';

const population = document.querySelectorAll('.population');

const numberFormat = new Intl.NumberFormat('en-US');

const arr = [];

for (const item of population) {
  arr.push(Number(item.innerHTML.split(',').join('')));
}

const total = arr.reduce((prev, current) => prev + current, 0);
const average = total / arr.length;

const formattedTotal = numberFormat.format(total);
const formattedAverage = numberFormat.format(average);

document.querySelector('.total-population').textContent = formattedTotal;
document.querySelector('.average-population').textContent = formattedAverage;
