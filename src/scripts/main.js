'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const populationElements = document.querySelectorAll('span.population');

  const populations = Array.from(populationElements)
    .map((span) => {
      const text = span.textContent.trim().replace(/,/g, '');

      return Number(text);
    })
    .filter((num) => !isNaN(num));

  const totalPopulation = populations.reduce((sum, num) => sum + num, 0);
  const averagePopulation = totalPopulation / populations.length;

  document.querySelector('span.total-population').textContent =
    totalPopulation.toLocaleString();

  document.querySelector('span.average-population').textContent =
    Math.round(averagePopulation).toLocaleString();
});
