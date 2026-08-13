'use strict';

const populations = Array.from(
  document.querySelectorAll('.population'),
  (span) => Number(span.textContent.replace(/,/g, '').trim()),
).filter(Number.isFinite);

const totalPopulation = populations.reduce(
  (sum, population) => sum + population,
  0,
);
const averagePopulation = totalPopulation / populations.length;

document.querySelector('.average-population').textContent =
  averagePopulation.toLocaleString('en-US');

document.querySelector('.total-population').textContent =
  totalPopulation.toLocaleString('en-US');
