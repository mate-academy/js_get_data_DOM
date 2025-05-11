'use strict';

// write your code here
document.addEventListener('DOMContentLoaded', function () {
  const populationElement = document.querySelectorAll('.population');
  const populations = Array.from(populationElement).map((element) => {
    const num = parseInt(element.textContent.replace(/,/g, ''), 10);

    return isNaN(num) ? 0 : num;
  });
  const totalPopulation = populations.reduce((sum, pop) => sum + pop, 0);
  const averagePopulation = totalPopulation / populations.length;

  const formatNumber = (num) => num.toLocaleString('en-US');

  document.querySelector('.total-population').textContent =
    formatNumber(totalPopulation);

  document.querySelector('.average-population').textContent = formatNumber(
    Math.round(averagePopulation),
  );
});
