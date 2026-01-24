'use strict';

// write your code here
let total = 0;
let count = 0;

[...document.querySelectorAll('span.population')]
  .map((el) => Number(el.textContent.replace(/,/g, '')))
  .forEach((el) => {
    total += el;
    count++;
  });

document.querySelector('.total-population').textContent =
  total.toLocaleString('en-US');

document.querySelector('.average-population').textContent = Math.round(
  total / count,
).toLocaleString('en-US');
