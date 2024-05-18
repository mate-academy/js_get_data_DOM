'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const populationSpans = document.querySelectorAll('.population');

  let totalPopulation = 0;
  let validPopulationCount = 0;

  populationSpans.forEach((span) => {
    const populationText = span.textContent.trim().replace(/,/g, '');
    const population = parseInt(populationText, 10);

    if (!isNaN(population)) {
      totalPopulation += population;
      validPopulationCount++;
    }
  });

  const averagePopulation =
    validPopulationCount !== 0 ? totalPopulation / validPopulationCount : 0;

  const formattedTotalPopulation = numberWithCommas(totalPopulation);
  const formattedAveragePopulation = numberWithCommas(averagePopulation);

  const averagePopulationSpan = document.querySelector('.average-population');
  const totalPopulationSpan = document.querySelector('.total-population');

  averagePopulationSpan.textContent = formattedAveragePopulation;
  totalPopulationSpan.textContent = formattedTotalPopulation;

  function numberWithCommas(x) {
    return x.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
});
