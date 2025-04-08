'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const populationElements = document.querySelectorAll('span.population');

  const populations = Array.from(populationElements).map((el) => {
    const num = parseInt(el.textContent.replace(/,/g, ''));

    return isNaN(num) ? 0 : num;
  });

  const totalPopulation = populations.reduce((sum, num) => sum + num, 0);

  const averagePopulation =
    populations.length > 0 ? totalPopulation / populations.length : 0;

  const formatter = new Intl.NumberFormat();

  const totalElement = document.querySelector('span.total-population');
  const averageElement = document.querySelector('span.average-population');

  if (totalElement) {
    totalElement.textContent = formatter.format(totalPopulation);
  }

  if (averageElement) {
    averageElement.textContent = formatter.format(
      Math.round(averagePopulation),
    );
  }
});
