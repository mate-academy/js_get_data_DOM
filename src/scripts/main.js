'use strict';

// write your code here
document.addEventListener('DOMContentLoaded', () => {
  const populationElements = document.querySelectorAll('.population');

  const populations = Array.from(populationElements).map((element) => {
    const numberString = element.textContent.replace(/,/g, '');

    return parseInt(numberString, 10);
  });

  const totalPopulation = populations.reduce(
    (sum, current) => sum + current,
    0,
  );
  const averagePopulation = Math.round(totalPopulation / populations.length);

  const formatNumber = (number) => number.toLocaleString();

  const formattedTotal = formatNumber(totalPopulation);
  const formattedAverage = formatNumber(averagePopulation);

  document.querySelector('.total-population').textContent = formattedTotal;
  document.querySelector('.average-population').textContent = formattedAverage;
});
