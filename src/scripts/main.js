'use strict';

// write your code here
document.addEventListener('DOMContentLoaded', () => {
  const populationSpans = document.querySelectorAll('span.population');

  if (populationSpans.length === 0) {
    return;
  }

  const population = Array.from(populationSpans)
    .map((span) => span.textContent.replace(/,/g, ''))
    .map((numStr) => Number(numStr))
    .filter(Number.isFinite);
  const total =
    population.length > 0 ? population.reduce((acc, val) => acc + val, 0) : 0;

  const average = population.length > 0 ? total / population.length : 0;

  const formatter = new Intl.NumberFormat('en-US');

  document.querySelector('span.total-population').textContent =
    formatter.format(total);

  document.querySelector('span.average-population').textContent =
    formatter.format(Math.round(average));
});
