'use strict';

const spans = [...document.querySelectorAll('.population')];

const numbers = spans.map((span) => {
  const delet = span.textContent.replace(/,/g, '');

  return parseInt(delet);
});

const total = numbers.reduce((sum, num) => sum + num, 0);

const average = total / numbers.length;

document.querySelector('.total-population').textContent =
  total.toLocaleString('en-US');

document.querySelector('.average-population').textContent =
  Math.round(average).toLocaleString('en-US');
