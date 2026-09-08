'use strict';

// write your code here
const populations = [...document.querySelectorAll('.population')].map(
  (span) => +span.textContent.replaceAll(',', ''),
);

const total = populations.reduce((sum, val) => sum + val);
const average = Math.round(total / populations.length);

document.querySelector('.total-population').textContent =
  total.toLocaleString('en-us');

document.querySelector('.average-population').textContent =
  average.toLocaleString('en-us');
