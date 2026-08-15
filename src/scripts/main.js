'use strict';

const populations = [...document.querySelectorAll('.population')]
  .map((span) => Number(span.textContent.replace(/,/g, '')))
  .filter(Number.isFinite);

const total = populations.reduce((sum, population) => sum + population, 0);
const average = total / populations.length;

document.querySelector('.average-population').textContent =
  average.toLocaleString('en-US');

document.querySelector('.total-population').textContent =
  total.toLocaleString('en-US');
