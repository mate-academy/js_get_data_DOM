'use strict';

const array = [];

const populations = document.querySelectorAll('.population');

populations.forEach((population) => {
  const num = Number(population.textContent.replace(/,/g, ''));

  array.push(num);
});

let total = 0;

for (let i = 0; i < array.length; i++) {
  total += array[i];
}

const formattedTotal = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
const average = total / array.length;
const formattedAverage = average
  .toFixed(2)
  .toString()
  .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

document.querySelector('.total-population').textContent = formattedTotal;

document.querySelector('.average-population').textContent = formattedAverage;

// write your code here
