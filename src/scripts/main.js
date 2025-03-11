'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const populations = Array.from(document.querySelectorAll('span.population'))
    .map((span) => Number(span.textContent.replace(/\D/g, '')))
    .filter((num) => !isNaN(num));

  const totalPopulation = populations.reduce((sum, num) => sum + num, 0);

  let averagePopulation = 0;

  if (populations.length > 0) {
    averagePopulation = Math.ceil(totalPopulation / populations.length);
  }

  function formatNumber(num) {
    return num.toLocaleString();
  }

  const averageSpan = document.querySelector('span.average-population');
  const totalSpan = document.querySelector('span.total-population');

  if (averageSpan) {
    averageSpan.textContent = formatNumber(averagePopulation);
  }

  if (totalSpan) {
    totalSpan.textContent = formatNumber(totalPopulation);
  }
});
