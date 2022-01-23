'use strict';

const dataSpan = document.querySelectorAll('.population');

let sum = 0;

for (const item of dataSpan) {
  const number = +item.textContent.replace(/[^0-9]/g, '');

  sum += number;
}

const average = sum / dataSpan.length;

const htmlTotal = document.querySelector('.total-population');
const htmlAverage = document.querySelector('.average-population');

htmlTotal.textContent = sum;
htmlAverage.textContent = average;

// write your code here
