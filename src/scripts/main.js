'use strict';

// write your code here
document.addEventListener('DOMContentLoaded', () => {
  const populationElement = document.querySelectorAll('.population');
  const populations = Array.from(populationElement).map((elem) => {
    const value = parseInt(elem.textContent.replace(/,/g, ''), 10);

    return isNaN(value) ? 0 : value;
  });

  const totalPopulation = populations.reduce((acc, num) => acc + num, 0);
  const averagePopulation = totalPopulation / populations.length;
  const formatNumber = (number) => {
    return number.toLocaleString('en-US');
  };

  document.querySelector('.total-population').textContent =
    formatNumber(totalPopulation);

  document.querySelector('.average-population').textContent = formatNumber(
    Math.floor(averagePopulation),
  );
});
