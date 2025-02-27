'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const populationElements = document.querySelectorAll('.population');

  const populations = Array.from(populationElements).map((el) => {
    return parseInt(el.textContent.replace(/,/g, ''), 10);
  });

  const totalPopulation = populations.reduce((sum, num) => sum + num, 0);
  const averagePopulation = Math.round(totalPopulation / populations.length);

  const formatNumber = (num) => num.toLocaleString('en-US');

  document.querySelector('.total-population').textContent =
    formatNumber(totalPopulation);

  document.querySelector('.average-population').textContent =
    formatNumber(averagePopulation);
});
