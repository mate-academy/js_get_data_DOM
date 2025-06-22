'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const populationElements = document.querySelectorAll('span.population');

  const populations = Array.from(populationElements)
    .map((el) => el.textContent.replace(/,/g, ''))
    .map((str) => parseInt(str, 10))
    .filter((num) => !isNaN(num));

  const total = populations.reduce((sum, val) => sum + val, 0);
  const average = Math.round(total / populations.length);

  const formatter = new Intl.NumberFormat();
  const formattedTotal = formatter.format(total);
  const formattedAverage = formatter.format(average);

  const averageEl = document.querySelector('span.average-population');
  const totalEl = document.querySelector('span.total-population');

  if (averageEl) {
    averageEl.textContent = formattedAverage;
  }

  if (totalEl) {
    totalEl.textContent = formattedTotal;
  }
});
