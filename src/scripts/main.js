'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const populationElements = document.querySelectorAll('.population');

  const populations = Array.from(populationElements).map((el) => {
    return Number(el.textContent.replace(/,/g, ''));
  });
  const totalPopulation = populations.reduce((sum, el) => sum + el, 0);

  const averagePopulation = totalPopulation / populations.length;

  function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  document.querySelector('.total-population').textContent =
    formatNumber(totalPopulation);

  document.querySelector('.average-population').textContent = formatNumber(
    Math.round(averagePopulation),
  );
});
