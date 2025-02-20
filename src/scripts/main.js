'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const populations = document.querySelectorAll('.population');

  const populationNumbers = Array.from(populations).map((population) => {
    return parseInt(population.textContent.replace(/,/g, ''), 10);
  });

  const totalPopulation = populationNumbers.reduce(
    (sum, population) => sum + population,
    0,
  );

  const averagePopulation = Math.round(
    totalPopulation / populationNumbers.length,
  );

  document.querySelector('.total-population').textContent =
    totalPopulation.toLocaleString('en-US');

  document.querySelector('.average-population').textContent =
    averagePopulation.toLocaleString('en-US');
});
