'use strict';

const populations = document.getElementsByClassName('population');
let total = 0;

for (const key of populations) {
  const num = +key.textContent.replace(/,/g, '');

  if (!isNaN(num)) {
    total += +num;
  }
}

const average = Math.floor(total / populations.length);

document.querySelector('.total-population').textContent =
  total.toLocaleString('en-US');

document.querySelector('.average-population').textContent =
  average.toLocaleString('en-US');
