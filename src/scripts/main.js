'use strict';

const population = [...document.querySelectorAll('.population')];

const numbers = population.map((span) => {
  const cleaned = span.textContent.replaceAll(',', '');
  const num = +cleaned;

  if (Number.isNaN(num)) {
    throw new Error(`Cannot convert ${span.textContent} to a number.`);
  }

  return num;
});

const total = numbers.reduce((sum, num) => sum + num, 0);
const average = Math.round(total / numbers.length);

document.querySelector('.total-population').textContent =
  total.toLocaleString('en-US');

document.querySelector('.average-population').textContent =
  average.toLocaleString('en-US');
