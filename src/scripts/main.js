'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const populationElements = document.querySelectorAll('.population');

  const populations = Array.from(populationElements).map((popElem) => {
    return parseInt(popElem.textContent.replace(/,/g, ''), 10);
  });

  const totalPopulation = populations.reduce(
    (total, population) => total + population,
    0,
  );

  const averagePopulation = totalPopulation / populations.length;

  const formatNumber = (num) => {
    return num.toLocaleString('en-US');
  };

  const totalPopulationElement = document.querySelector('.total-population');
  const averagePopulationElement = document.querySelector(
    '.average-population',
  );

  totalPopulationElement.textContent = formatNumber(totalPopulation);

  averagePopulationElement.textContent = formatNumber(
    averagePopulation.toFixed(0),
  );
});
