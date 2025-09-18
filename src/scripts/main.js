'use strict';

// write your code here
document.addEventListener('DOMContentLoaded', () => {
  const populationSpans = document.querySelectorAll('span.population');

  const population = Array.from(populationSpans)
    .map((span) => span.textContent.replace(/,/g, ''))
    .map((numStr) => Number(numStr))
    .filter((num) => !isNaN(num));
  const total = population.reduce((acc, item) => acc + item, 0);
  const average = total / population.length;

  const formatter = new Intl.NumberFormat();

  document.querySelector('span.total-population').textContent =
    formatter.format(total);

  document.querySelector('span.average-population').textContent =
    formatter.format(Math.round(average));
});
