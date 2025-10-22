'use strict';

let sum = 0;
let validCount = 0;
let average = 0;

const populations = document.querySelectorAll('span.population');

for (let i = 0; i < populations.length; i++) {
  const number = populations[i].innerText.replace(/[^ 0-9.-]/g, '');

  if (!Number.isNaN(+number)) {
    sum += +number;
    validCount++;
  }
}

if (validCount > 0) {
  average = Math.round(sum / validCount);
}

document.querySelector('.total-population').innerText =
  sum.toLocaleString('en-US');

document.querySelector('.average-population').innerText =
  average.toLocaleString('en-US');
