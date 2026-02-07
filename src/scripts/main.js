'use strict';

const populationElements = document.querySelectorAll('span.population');

const populations = Array.from(populationElements).map((span) => {
  return Number(span.textContent.replace(/,/g, ''));
});

const total = populations.reduce((sum, n) => sum + n, 0);
const average = total / populations.length;

document.querySelector('span.average-population').textContent =
  Math.round(average).toLocaleString();

document.querySelector('span.total-population').textContent =
  total.toLocaleString();
