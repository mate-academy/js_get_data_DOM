'use strict';

const elements = [...document.querySelectorAll('.population')];
const totalText = document.querySelector('.total-population');
const averageText = document.querySelector('.average-population');
const numbers = [];
let total = 0;
let average = 0;

for (const num of elements) {
  numbers.push(Number(num.textContent.replaceAll(',', '')));
}

for (const number of numbers) {
  total += number;
}
average = total / numbers.length;
total = total.toLocaleString('en-US');
average = average.toLocaleString('en-US');

totalText.textContent = total;
averageText.textContent = average;
