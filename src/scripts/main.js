'use strict';

const numbers = [...document.querySelectorAll('.population')];
const arrs = numbers.map(item => +item.textContent.split(',').join(''));
const total = arrs.reduce((a, b) => a + b);
const average = total / numbers.length;

document.querySelector(
  '.total-population').innerHTML = total.toLocaleString('en-US');

document.querySelector(
  '.average-population').innerHTML = average.toLocaleString('en-US');
