'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const populationElements = document.querySelectorAll('.population');

  const populations = Array.from(populationElements).map((element) => {
    const populationText = element.textContent.replace(/,/g, '');

    return parseInt(populationText, 10);
  });

  const totalPopulation = populations.reduce((acc, num) => acc + num, 0);
  const averagePopulation = totalPopulation / populations.length;

  const formatNumber = (number) => number.toLocaleString('en-US');

  const formattedTotal = formatNumber(totalPopulation);
  const formattedAverage = formatNumber(Math.round(averagePopulation));

  document.querySelector('.total-population').textContent = formattedTotal;
  document.querySelector('.average-population').textContent = formattedAverage;
});
