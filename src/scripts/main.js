'use strict';

const elements = document.querySelectorAll('span.population');
const numbers = [];

for (const el of elements) {
  const textData = el.textContent;
  const numberString = textData.split(',').join('');
  const number = +numberString;

  numbers.push(number);
}

const total = numbers.reduce((accum, current) => accum + current, 0);
const average = total / numbers.length;

document.querySelector('.average-population').textContent =
  average.toLocaleString();

document.querySelector('.total-population').textContent =
  total.toLocaleString();
