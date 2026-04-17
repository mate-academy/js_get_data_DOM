'use strict';

const populations = document.querySelectorAll('.population');

const numbers = Array.from(populations)
  .map((span) => span.textContent.replace(/,/g, '').trim())
  .map(Number);

const total = numbers.reduce((sum, num) => sum + num, 0);
const average = numbers.length ? total / numbers.length : 0;

document.querySelector('.total-population').textContent =
  total.toLocaleString('en-US');

document.querySelector('.average-population').textContent =
  Math.round(average).toLocaleString('en-US');
