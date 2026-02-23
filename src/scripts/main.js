'use strict';

const populations = [...document.querySelectorAll('.population')];
const numbers = populations.map(
  (item) => +item.textContent.replaceAll(',', ''),
);

const total = numbers.reduce((sum, item) => sum + item, 0);
const average = Math.round(total / numbers.length);
const totalFormatted = total.toLocaleString('en-US');
const averageFormatted = average.toLocaleString('en-US');

document.querySelector('.total-population').textContent = totalFormatted;
document.querySelector('.average-population').textContent = averageFormatted;
