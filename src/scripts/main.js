'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const popEls = document.querySelectorAll('span.population');

  const populations = [...popEls]
    .map((el) => el.textContent.replace(/,/g, ''))
    .map(Number)
    .filter((num) => !isNaN(num));

  if (!populations.length) {
    return;
  }

  const total = populations.reduce((sum, num) => sum + num, 0);
  const average = Math.round(total / populations.length);
  const form = (num) => num.toLocaleString('en-US');

  document.querySelector('span.total-population').textContent = form(total);
  document.querySelector('span.average-population').textContent = form(average);
});
