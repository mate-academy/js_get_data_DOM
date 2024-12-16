'use strict';

const values = [...document.querySelectorAll('span.population')].map(
  (e) => parseInt(e.textContent.replaceAll(',', '')),
  10,
);

const total = values.reduce((prev, value) => prev + value);
const average = total / values.length;

document.querySelector('span.average-population').textContent =
  average.toLocaleString();

document.querySelector('span.total-population').textContent =
  total.toLocaleString();
