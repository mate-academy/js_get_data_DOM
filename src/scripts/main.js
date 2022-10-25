'use strict';

const items = document.getElementsByClassName('population');
const numbers = [...items].map(item => +item.innerText.split(',').join(''));

const total = numbers.reduce((a, b) => a + b, 0);
const average = total / numbers.length;

document.querySelector(
  '.total-population').innerHTML = total.toLocaleString('en-US');
document.querySelector(
  '.average-population').innerHTML = average.toLocaleString('en-US');
