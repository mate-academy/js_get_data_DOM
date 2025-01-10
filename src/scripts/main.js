'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const populationElements = [...document.querySelectorAll('.population')];

  const populations = populationElements.map((el) => {
    return parseInt(el.textContent.replace(/,/g, ''), 10);
  });

  const totalPopulation = populations.reduce(
    (sum, population) => sum + population,
    0,
  );

  const averagePopulation = totalPopulation / populations.length;

  document.querySelector('.total-population').textContent =
    totalPopulation.toLocaleString();

  document.querySelector('.average-population').textContent =
    averagePopulation.toLocaleString();
});
