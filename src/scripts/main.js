'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const populationElements = document.querySelectorAll('.population');

  const populations = Array.from(populationElements)
    .map((el) => el.textContent.replace(/,/g, ''))
    .map(Number)
    .filter((num) => !isNaN(num));

  const totalPopulation = populations.reduce((sum, num) => sum + num, 0);
  const averagePopulation = totalPopulation / populations.length;

  const formattedTotal = totalPopulation.toLocaleString();
  const formattedAverage = Math.round(averagePopulation).toLocaleString();

  document.querySelector('.total-population').textContent = formattedTotal;
  document.querySelector('.average-population').textContent = formattedAverage;
});
