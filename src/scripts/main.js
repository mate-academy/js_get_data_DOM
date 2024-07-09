'use strict';

let totalPopulation = 0;
let countriesAmount = 0;

const populations = [...document.querySelectorAll('.population')].map(
  (population) => {
    return population.textContent;
  },
);

populations.forEach((populationString) => {
  const number = Number(populationString.split(',').join(''));

  totalPopulation += number;
  countriesAmount += 1;
});

const averagePopulation = totalPopulation / countriesAmount;

const totalSpan = document.querySelector('.total-population');
const averageSpan = document.querySelector('.average-population');

totalSpan.textContent = totalPopulation.toLocaleString('en-US');
averageSpan.textContent = averagePopulation.toLocaleString('en-US');
