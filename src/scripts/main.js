'use strict';

// write your code here

const populations = document.querySelectorAll('.population');

const numbers = [...populations].map(function (item) {
  return Number(item.textContent.replaceAll(',', ''));
});

const total = numbers.reduce((sum, num) => sum + num, 0);
const average = Math.round(total / numbers.length);

document.querySelector('.total-population').textContent =
  total.toLocaleString('en-US');

document.querySelector('.average-population').textContent =
  average.toLocaleString('en-US');
