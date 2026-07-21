'use strict';

const populations = Array.from(document.querySelectorAll('.population'));
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');
const numbers = populations
  .map((el) => +el.textContent.replaceAll(',', ''))
  .filter((num) => !Number.isNaN(num));
const totalNumber = numbers.reduce((acc, num) => acc + num, 0);

total.textContent = totalNumber.toLocaleString('en-US');

average.textContent = Math.round(totalNumber / numbers.length).toLocaleString(
  'en-US',
);
