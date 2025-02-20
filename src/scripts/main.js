'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const populationElements = document.querySelectorAll('.population');

  const populations = Array.from(populationElements).map((el) => {
    const populationText = el.textContent.trim().replace(/,/g, '');
    const populationNumber = parseFloat(populationText);

    return isNaN(populationNumber) ? 0 : populationNumber;
  });

  const totalPopulation = populations.reduce((total, num) => total + num, 0);
  const averagePopulation = totalPopulation / populations.length;

  function formatNumber(num) {
    return num.toLocaleString('uk-UA');
  }

  document.querySelector('.total-population').textContent =
    formatNumber(totalPopulation);

  document.querySelector('.average-population').textContent =
    formatNumber(averagePopulation);
});
