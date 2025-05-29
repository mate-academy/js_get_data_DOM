'use strict';

// write your code here
document.addEventListener('DOMContentLoaded', () => {
  const population = document.querySelectorAll('.population');
  let totalPopulation = 0;
  let populationCount = 0;

  population.forEach((span) => {
    const populationString = span.textContent;
    const cleanedPopulationString = populationString.replace(/,/g, '');
    const populationNumber = parseInt(cleanedPopulationString, 10);

    if (!isNaN(populationNumber)) {
      totalPopulation += populationNumber;
      populationCount++;
    }
  });

  const averagePopulation = totalPopulation / populationCount;

  const formattedTotalPopulation = totalPopulation.toLocaleString('en-US');
  const formattedAveragePopulation = averagePopulation.toLocaleString('en-US', {
    maximumFractionDigits: 0,
  });

  const totalPopulationSpan = document.querySelector('.total-population');
  const averagePopulationSpan = document.querySelector('.average-population');

  if (totalPopulationSpan) {
    totalPopulationSpan.textContent = formattedTotalPopulation;
  }

  if (averagePopulationSpan) {
    averagePopulationSpan.textContent = formattedAveragePopulation;
  }
});
