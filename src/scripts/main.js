'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const populations = document.querySelectorAll('span.population');
  let totalPopulation = 0;
  let count = 0;

  populations.forEach((pop) => {
    const populationText = pop.textContent.trim();
    const populationNumber = parseInt(populationText.replace(/,/g, ''), 10);

    if (!isNaN(populationNumber)) {
      totalPopulation += populationNumber;
      count++;
    }
  });

  const averagePopulation = totalPopulation / count;

  const formatNumber = (num) => {
    return num.toLocaleString('en-US');
  };

  document.querySelector('.average-population').textContent = formatNumber(
    Math.round(averagePopulation),
  );

  document.querySelector('.total-population').textContent =
    formatNumber(totalPopulation);
});
