'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const populationElements = document.querySelectorAll('span.population');

  const populations = [];

  populationElements.forEach(el => {
    const number = parseInt(el.textContent.replace(/,/g, ''), 10);

    if (!isNaN(number)) {
      populations.push(number);
    }
  });

  if (populations.length > 0) {
    const totalPopulation = populations.reduce((sum, value) => sum + value, 0);
    const averagePopulation = totalPopulation / populations.length;

    document.querySelector('span.total-population').textContent = formatNumber(totalPopulation);
    document.querySelector('span.average-population').textContent = formatNumber(Math.round(averagePopulation));
  }
});

function formatNumber(number) {
  return number.toLocaleString();
}
