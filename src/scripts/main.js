'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const populationElements = document.querySelectorAll('.population');
  const populations = Array.from(populationElements)
    .map((el) => parseInt(el.textContent.replace(/,/g, ''), 10))
    .filter((num) => !isNaN(num));

  const totalPopulation = populations.reduce((acc, num) => acc + num, 0);
  const averagePopulation = Math.round(totalPopulation / populations.length);

  function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  document.querySelector('.total-population').textContent =
    formatNumber(totalPopulation);

  document.querySelector('.average-population').textContent =
    formatNumber(averagePopulation);
});
