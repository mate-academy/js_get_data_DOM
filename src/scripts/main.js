'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const spans = document.querySelectorAll('span.population');
  const numbers = [];

  for (const el of spans) {
    const n = parseInt(el.textContent.replace(/\D/g, ''), 10);

    if (!Number.isNaN(n)) {
      numbers.push(n);
    }
  }

  if (numbers.length === 0) {
    return;
  }

  let total = 0;

  for (const n of numbers) {
    total += n;
  }

  const average = Math.round(total / numbers.length);

  document.querySelector('.total-population').textContent =
    total.toLocaleString('en-US');

  document.querySelector('.average-population').textContent =
    average.toLocaleString('en-US');
});
