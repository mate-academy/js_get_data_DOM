'use strict';

const populations = document.querySelectorAll('.population');
const numbers = [];

populations.forEach((el) => {
  const text = el.textContent;
  const cleaned = text.replace(/,/g, '');
  const value = Number(cleaned);

  if (!Number.isNaN(value)) {
    numbers.push(value);
  }
});

const total = numbers.reduce((sum, n) => sum + n, 0);
const average = Math.round(total / numbers.length);

document.querySelector('.total-population').textContent =
  total.toLocaleString();

document.querySelector('.average-population').textContent =
  average.toLocaleString();
