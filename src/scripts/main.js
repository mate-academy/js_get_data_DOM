'use strict';

const populationOfCuntries = document
  .querySelectorAll('.population');

const outputOfTotalPopulation = document
  .querySelector('.total-population');

const outputOfAveragePopulation = document
  .querySelector('.average-population');

const arrOfPopulation = [...populationOfCuntries]
  .map((countryAverage) => countryAverage.innerText);

const totalPopulation = arrOfPopulation
  .map(el => +el.split(',').join(''))
  .reduce((acc, next) => acc + next);

const averageOfPopulation = totalPopulation / arrOfPopulation.length;

outputOfTotalPopulation.innerText = totalPopulation
  .toLocaleString();

outputOfAveragePopulation.innerText = averageOfPopulation
  .toLocaleString();
