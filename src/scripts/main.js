'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const elements = [...document.querySelectorAll('.population')];

  const population = elements.map(
    (element) => +element.textContent.replaceAll(',', ''),
  );

  const totalPopulation = population.reduce((a, b) => a + b, 0);
  const avgPopulation = totalPopulation / population.length;

  document.querySelector('.total-population').textContent =
    totalPopulation.toLocaleString();

  document.querySelector('.average-population').textContent =
    Math.round(avgPopulation).toLocaleString();
});
