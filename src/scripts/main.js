'use strict';

// write your code here

document.addEventListener('DOMContentLoaded', () => {
  const populationElements = document.querySelectorAll('.population');
  const populations = Array.from(populationElements).map((element) => {
    const populationString = element.textContent.replace(/,/g, '');

    return parseInt(populationString, 10);
  });

  const totalPopulation = populations.reduce(
    (sum, population) => sum + population,
    0,
  );

  const averagePopulation = (totalPopulation / populations.length).toFixed(0);

  document.querySelector('.total-population').textContent =
    totalPopulation.toLocaleString();

  document.querySelector('.average-population').textContent =
    averagePopulation.toLocaleString();
});
