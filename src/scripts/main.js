'use strict';

// write your code here
const populations = document.querySelectorAll('.population');
const array = [];

for (const population of populations) {
  const value = population.textContent.replaceAll(',', '');
  const number = Number(value);

  if (!Number.isNaN(number)) {
    array.push(number);
  }
}

let total = 0;

for (const arr of array) {
  total = arr + total;
}

const average = total / array.length;

document.querySelector('.average-population').textContent =
  average.toLocaleString('en-US');

document.querySelector('.total-population').textContent =
  total.toLocaleString('en-US');
