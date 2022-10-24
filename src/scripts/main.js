'use strict';

const populations = [...document.querySelectorAll('.population')]
  .map(population => {
    const parsedPopulation = parseInt(population
      .textContent
      .replaceAll(',', '')
    );

    if (!isFinite(parsedPopulation)) {
      return 0;
    }

    return parsedPopulation;
  });

const populationSum = populations.reduce((sum, population) => {
  return sum + population;
}, 0);

const totalPopulation = document.querySelector('.total-population');

totalPopulation.textContent = populationSum.toLocaleString();

const averagePopulation = document.querySelector('.average-population');

averagePopulation.textContent = (populationSum / populations.length)
  .toLocaleString();
