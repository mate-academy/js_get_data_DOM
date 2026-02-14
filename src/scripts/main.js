'use strict';

// write your code here
const allElement = document.querySelectorAll('.population');
const numbers = [];

allElement.forEach((el) => {
  const text = el.textContent.replace(/[, ]+/g, '');
  const num = Number(text);

  if (Number.isFinite(num)) {
    numbers.push(num);
  }
});

const total = numbers.reduce((sum, el) => sum + el, 0);
let average = 0;

if (numbers.length > 0) {
  average = total / numbers.length;
}

const totalFormat = total.toLocaleString('en-US');
const averageFormat = average.toLocaleString('en-US');

const totalEl = document.querySelectorAll('.total-population');

totalEl.forEach((el) => {
  el.textContent = totalFormat;
});

const averageEl = document.querySelectorAll('.average-population');

averageEl.forEach((el) => {
  el.textContent = averageFormat;
});
