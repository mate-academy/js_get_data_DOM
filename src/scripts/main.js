'use strict';

const spans = document.querySelectorAll('span.population');
const numbers = [];

for (const span of spans) {
  const digitsOnly = span.textContent.replace(/[^0-9]/g, '');

  if (digitsOnly !== '') {
    const number = Number(digitsOnly);

    numbers.push(number);
  }
}

const total = numbers.reduce((sum, num) => sum + num, 0);

let average;

if (numbers.length > 0) {
  average = Math.round(total / numbers.length);
} else {
  average = 0;
}

function format(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

document.querySelector('.average-population').textContent = format(average);
document.querySelector('.total-population').textContent = format(total);
