'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const populationSpans = document.querySelectorAll('span.population');

  const populations = Array.from(populationSpans)
    .map((span) => span.textContent.replace(/,/g, ''))
    .map((str) => Number(str))
    .filter((num) => !isNaN(num));

  const total = populations.reduce((sum, num) => sum + num, 0);
  const average = total / populations.length;

  const formatNumber = (num) => num.toLocaleString();

  const averageSpan = document.querySelector('span.average-population');
  const totalSpan = document.querySelector('span.total-population');

  if (averageSpan) {
    averageSpan.textContent = formatNumber(Math.round(average));
  }

  if (totalSpan) {
    totalSpan.textContent = formatNumber(total);
  }
});
