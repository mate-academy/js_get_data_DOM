'use strict';

const populationSpans = document.querySelectorAll('span.population');

const populations = Array.from(populationSpans)
  .map((span) => span.textContent.replace(/,/g, ''))
  .map((str) => Number(str))
  .filter((num) => !isNaN(num));

const total = populations.reduce((sum, num) => sum + num, 0);
const average = populations.length ? total / populations.length : 0;

function formatNumber(num) {
  return num.toLocaleString('en-US');
}

const totalSpan = document.querySelector('span.total-population');
const averageSpan = document.querySelector('span.average-population');

if (totalSpan) {
  totalSpan.textContent = formatNumber(total);
}

if (averageSpan) {
  averageSpan.textContent = formatNumber(Math.round(average));
}
