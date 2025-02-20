'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const populationElements = document.querySelectorAll('span.population');
  const populations = Array.from(populationElements).map((el) => {
    const num = parseFloat(el.textContent.replace(/,/g, ''));

    return isNaN(num) ? 0 : num;
  });

  const totalPopulation = populations.reduce((acc, num) => acc + num, 0);
  const averagePopulation = totalPopulation / populations.length;

  const formatNumber = (num) => num.toLocaleString();

  document.querySelector('span.average-population').textContent =
    formatNumber(averagePopulation);

  document.querySelector('span.total-population').textContent =
    formatNumber(totalPopulation);
});
