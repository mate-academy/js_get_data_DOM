'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const populationElements = document.querySelectorAll('.population');

  const populations = Array.from(populationElements).map((el) => {
    const num = parseInt(el.textContent.replace(/,/g, ''), 10);

    return isNaN(num) ? 0 : num;
  });

  const totalPopulation = populations.reduce((sum, value) => sum + value, 0);

  const avaragePopulation = totalPopulation / populations.length;

  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  document.querySelector('.total-population').textContent =
    formatNumber(totalPopulation);

  document.querySelector('.average-population').textContent =
    formatNumber(avaragePopulation);
});
