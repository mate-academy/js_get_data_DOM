'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('span.population');

  const populations = [];

  elements.forEach((element) => {
    const number = parseInt(element.textContent.replace(/,/g, ''), 10);

    if (!isNaN(number)) {
      populations.push(number);
    }
  });

  if (populations.length > 0) {
    const totalPopulation = populations.reduce((sum, value) => sum + value, 0);
    const averagePopulation = totalPopulation / populations.length;

    document.querySelector('span.total-population').textContent =
      formatNumber(totalPopulation);

    document.querySelector('span.average-population').textContent =
      formatNumber(Math.round(averagePopulation));
  }
});

function formatNumber(number) {
  return number.toLocaleString();
}
