'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const populationElements = document.querySelectorAll('.population');

  const populationNumbers = Array.from(populationElements)
    .map((el) => el.textContent.replace(/,/g, ''))
    .filter((str) => !isNaN(str))
    .map(Number);

  const totalPopulation = populationNumbers.reduce((sum, num) => sum + num, 0);
  const averagePopulation = totalPopulation / populationNumbers.length;

  const formatter = new Intl.NumberFormat('en-US');
  const formattedTotal = formatter.format(totalPopulation);
  const formattedAverage = formatter.format(averagePopulation);

  document.querySelector('.total-population').textContent = formattedTotal;
  document.querySelector('.average-population').textContent = formattedAverage;
});
