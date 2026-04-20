'use strict';

const spans = document.querySelectorAll('span.population');

const numbers = Array.from(spans).map((span) => {
  const num = Number(span.textContent.replace(/,/g, ''));

  return isNaN(num) ? 0 : num;
});

const total = numbers.reduce((sum, n) => sum + n, 0);
const average = Math.round(total / numbers.length);

const format = (n) => n.toLocaleString('en-US');

document.querySelector('.total-population').textContent = format(total);
document.querySelector('.average-population').textContent = format(average);
