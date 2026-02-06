'use strict';

// write your code here
const elements = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const avgPop = document.querySelector('.average-population');

const numbers = [...elements].map((element) => {
  return Number(element.textContent.replaceAll(',', ''));
});

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

const avg = Math.round(sum / numbers.length);

total.innerHTML = sum.toLocaleString('en-US');
avgPop.innerHTML = avg.toLocaleString('en-US');
