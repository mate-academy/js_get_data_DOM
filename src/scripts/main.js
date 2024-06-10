'use strict';

document.addEventListener('DOMContentLoaded', () => {
  function parsePopulation(populationString) {
    return parseInt(populationString.replace(/,/g, ''));
  }

  function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  const populationSpans = document.querySelectorAll('span.population');
  const populations = [];

  populationSpans.forEach((span) => {
    const population = parsePopulation(span.textContent);

    populations.push(population);
  });

  const totalPopulation = populations.reduce((acc, curr) => acc + curr, 0);
  const averagePopulation = totalPopulation / populations.length;

  const formattedTotal = formatNumber(totalPopulation);
  const formattedAverage = formatNumber(Math.round(averagePopulation));

  document.querySelector('span.total-population').textContent = formattedTotal;

  document.querySelector('span.average-population').textContent =
    formattedAverage;
});
