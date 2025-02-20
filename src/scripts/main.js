'use strict';

// write your code here
const numbers = document.getElementsByClassName('population');
let sum = 0;

for (const ch of numbers) {
  sum += Number(ch.textContent.replace(/,/g, ''));
}

const avg = sum / numbers.length;

document.getElementsByClassName('total-population')[0].innerHTML =
  sum.toLocaleString('en-US');

document.getElementsByClassName('average-population')[0].innerHTML =
  avg.toLocaleString('en-US');
