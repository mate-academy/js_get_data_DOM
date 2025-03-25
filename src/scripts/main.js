'use strict';

// write your code here
const arrayOfDigits = [...document.querySelectorAll('.population')].map(
  (element) => Number(element.innerText.replace(/,/g, '')),
);
const total = arrayOfDigits.reduce((sum, num) => sum + num, 0);
const average = Math.round(total / arrayOfDigits.length);

document.querySelector('.total-population').innerText =
  total.toLocaleString('en-US');

document.querySelector('.average-population').innerText =
  average.toLocaleString('en-US');
