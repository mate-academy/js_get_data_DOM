'use strict';

const arr = [...document.querySelectorAll('.population')];
const result = arr
  .map(el => el.textContent?.trim().replace(/,/g, ''))
  .filter(s => s !== '' && Number.isFinite(Number(s)))
  .map(s => Number(s));
let total = 0;
let average = 0;

if (result.length > 0) {
  total = result.reduce((sum, num) => sum + num, 0);
  average = total / result.length;
}


document.querySelector('.total-population').textContent =
  total.toLocaleString('en-US');

document.querySelector('.average-population').textContent =
  average.toLocaleString('en-US');
