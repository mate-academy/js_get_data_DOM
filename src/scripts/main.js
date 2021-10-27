'use strict';

// write your code here
const span = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

let sum = 0;
let count = 0;

for (const text of span) {
  const number = +text.textContent.replace(',', '')
    .replace(',', '').replace(',', '');

  sum += number;
  count++;
}

const summa = sum.toLocaleString('en-US');
const avrg = (sum / count).toLocaleString('en-US');

total.textContent = summa;
average.textContent = avrg;
