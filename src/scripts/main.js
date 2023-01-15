'use strict';

const spans = document.querySelectorAll('.population');
let sum = 0;
let count = 0;

for (const span of spans) {
  sum += (+span.textContent.split(',').join(''));
  count++;
}

document.querySelector('.total-population').textContent
= sum.toLocaleString('en-US');

document.querySelector('.average-population').textContent
= (sum / count).toLocaleString('en-US');
