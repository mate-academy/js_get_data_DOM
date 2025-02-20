'use strict';

document.addEventListener('DOMContentLoaded', () => {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  const populationSpans = document.querySelectorAll('span.population');

  const populations = Array.from(populationSpans).map((span) => {
    return parseInt(span.textContent.replace(/,/g, ''), 10);
  });

  const totalPopulation = populations.reduce((acc, num) => acc + num, 0);
  const averagePopulation = totalPopulation / populations.length;

  const totalPopulationFormatted = numberWithCommas(totalPopulation);
  const averagePopulationFormatted = numberWithCommas(
    Math.round(averagePopulation),
  );

  const totalPopulationSpan = document.querySelector('span.total-population');
  const averagePopulationSpan = document.querySelector(
    'span.average-population',
  );

  totalPopulationSpan.textContent = totalPopulationFormatted;
  averagePopulationSpan.textContent = averagePopulationFormatted;
});
