'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const populationElements = document.querySelectorAll('.population');

  const populations = Array.from(populationElements).map((el) => {
    return +el.textContent.replace(/,/g, '');
  });

  const totalPopulation = populations.reduce(
    (sum, population) => sum + population,
    0,
  );

  const averagePopulation = totalPopulation / populations.length;

  const formatNumber = (number) => number.toLocaleString('en-US');

  document.querySelector('.total-population').textContent =
    formatNumber(totalPopulation);

  document.querySelector('.average-population').textContent =
    formatNumber(averagePopulation);
});
