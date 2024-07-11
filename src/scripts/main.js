'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const populationSpans = document.querySelectorAll('span.population');

  const populations = Array.from(populationSpans)
    .map((span) => {
      return parseInt(span.textContent.replace(/,/g, ''), 10);
    })
    .filter((number) => !isNaN(number));

  const totalPopulation = populations.reduce(
    (sum, population) => sum + population,
    0,
  );
  const averagePopulation = totalPopulation / populations.length;

  function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  const averagePopulationSpan = document.querySelector(
    'span.average-population',
  );
  const totalPopulationSpan = document.querySelector('span.total-population');

  if (averagePopulationSpan) {
    averagePopulationSpan.textContent = formatNumberWithCommas(
      Math.round(averagePopulation),
    );
  }

  if (totalPopulationSpan) {
    totalPopulationSpan.textContent = formatNumberWithCommas(totalPopulation);
  }
});
