'use strict';

// write your code here
const populationSpans = document.querySelectorAll('.population');

const populations = Array.from(populationSpans).map((span) => {
  return Number(span.textContent.replace(/,/g, ''));
});

const total = populations.reduce((sum, value) => sum + value, 0);

const average = Math.round(total / populations.length);

document.querySelector('.total-population').textContent =
  total.toLocaleString();

document.querySelector('.average-population').textContent =
  average.toLocaleString();
