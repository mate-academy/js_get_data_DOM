'use strict';

const text = document.querySelectorAll('.population');
const numbers = [];

text.forEach((value) => {
  const num = Number(value.textContent.trim().replace(/,/g, ''));

  if (!Number.isNaN(num)) {
    numbers.push(num);
  }
});

const sum = numbers.reduce((acc, value) => acc + value, 0);
const average = sum / numbers.length;

const sumFormatted = sum.toLocaleString('en-US');
const averageFormatted = average.toLocaleString('en-US');

const replaceAverage = document.querySelector('.average-population');

replaceAverage.textContent = averageFormatted;

const replaceTotal = document.querySelector('.total-population');

replaceTotal.textContent = sumFormatted;
