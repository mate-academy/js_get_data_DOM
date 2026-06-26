'use strict';

const populations = document.querySelectorAll('.population');

const numbers = Array.from(populations).map((item) => {
  return Number(item.textContent.replace(/,/g, ''));
});

const total = numbers.reduce((sum, number) => sum + number, 0);

const average = total / numbers.length;

document.querySelector('.total-population').textContent =
  total.toLocaleString();

document.querySelector('.average-population').textContent =
  Math.round(average).toLocaleString();
