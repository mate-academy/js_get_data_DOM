'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const populationElements = document.querySelectorAll('.population');

  const populations = [...populationElements].map((element) => {
    const populationText = element.textContent.replace(/,/g, '');

    return +populationText;
  });
  const totalPopulation = populations.reduce(
    (acc, population) => acc + population,
    0,
  );

  const averagePopulation = totalPopulation / populations.length;
  const formatNumber = (num) => num.toLocaleString('en-US');
  const totalPopulationElement = document.querySelector('.total-population');
  const averagePopulationElement = document.querySelector(
    '.average-population',
  );

  if (totalPopulationElement) {
    totalPopulationElement.textContent = formatNumber(totalPopulation);
  }

  if (averagePopulationElement) {
    averagePopulationElement.textContent = formatNumber(averagePopulation);
  }
});
