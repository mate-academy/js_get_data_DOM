'use strict';

const populationOfAllCountries = Array.from(
  document.querySelectorAll('.population'),
);
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const getTotalPopulation = populationOfAllCountries.reduce(
  (acc, population) => {
    const convertText = Number(population.textContent.split(',').join(''));

    return acc + convertText;
  },
  0,
);

const getAverage = Math.ceil(
  getTotalPopulation / populationOfAllCountries.length,
);

totalPopulation.textContent = getTotalPopulation.toLocaleString('en-US');
averagePopulation.textContent = getAverage.toLocaleString('en-US');
