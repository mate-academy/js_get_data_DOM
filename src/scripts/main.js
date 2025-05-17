'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const populationElements = document.querySelectorAll('.population');

  const populations = Array.from(populationElements).map((el) => {
    const num = parseInt(el.textContent.replace(/,/g, ''), 10);

    return isNaN(num) ? 0 : num;
  });

  const totalPopulation =
    populations.length > 0 ? populations.reduce((sum, num) => sum + num, 0) : 0;

  const averagePopulation = populations.length
    ? Math.round(totalPopulation / populations.length)
    : 0;

  const formatNumber = (num) => num.toLocaleString();

  document.querySelector('.total-population').textContent =
    formatNumber(totalPopulation);

  document.querySelector('.average-population').textContent =
    formatNumber(averagePopulation);
});
