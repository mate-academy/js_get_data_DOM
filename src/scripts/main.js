'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const populationElements = document.querySelectorAll('.population');

  const populations = Array.from(populationElements).map((el) => {
    const populationText = el.textContent.replace(/,/g, ''); // Видалити коми

    return parseInt(populationText, 10);
  });

  const totalPopulation = populations.reduce((acc, num) => acc + num, 0);
  const averagePopulation = totalPopulation / populations.length;

  const formattedTotal = totalPopulation.toLocaleString();
  const formattedAverage = averagePopulation.toLocaleString(undefined, {
    maximumFractionDigits: 0,
  });

  document.querySelector('.total-population').textContent = formattedTotal;
  document.querySelector('.average-population').textContent = formattedAverage;
});
