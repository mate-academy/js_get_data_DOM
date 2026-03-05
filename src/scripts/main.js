'use strict';

const populations = document.querySelector('.population');

const numbers = [];

for (const el of populations) {
  const text = el.textContent;
  const number = Number(text.replaceAll(',', ''));

  numbers.push(number);
}

const total = numbers.reduce((sum, num) => sum + num, 0);
const average = Math.round(total / numbers.length);

document.querySelector('.total-population').textContent =
  total.toLocaleString();

document.querySelector('.average-population').textContent =
  average.toLocaleString();
