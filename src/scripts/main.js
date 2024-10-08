'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const populationElements = document.querySelectorAll('span.population');

  const populations = Array.from(populationElements).map((el) => {
    const populationText = el.textContent;

    return Number(populationText.replace(/,/g, ''));
  });

  const totalPopulation = populations.reduce(
    (sum, population) => sum + population,
    0,
  );
  const averagePopulation = totalPopulation / populations.length;
  const formatNumber = (num) => num.toLocaleString('en-US');

  document.querySelector('span.average-population').textContent = formatNumber(
    Math.round(averagePopulation),
  );

  document.querySelector('span.total-population').textContent =
    formatNumber(totalPopulation);
});
