'use strict';

const populations = Array.from(
  document.querySelectorAll('span.population'),
).map((span) => +span.textContent.replace(/,/g, '').trim());

const formatNumber = (number) => number.toLocaleString('en-US');

const totalPopulation = populations.reduce((acc, p) => acc + p, 0);
const averagePopulation = Math.round(totalPopulation / populations.length);

const totalEl = document.querySelector('span.total-population');
const averageEl = document.querySelector('span.average-population');

if (totalEl && averageEl) {
  totalEl.textContent = formatNumber(totalPopulation);
  averageEl.textContent = formatNumber(averagePopulation);
}
