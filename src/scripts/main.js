'use strict';

const populationOfCuntries = document
  .querySelectorAll('.population');

const outputOfTotalPopulation = document
  .querySelector('.total-population');

const outputOfAveragePopulation = document
  .querySelector('.average-population');

const arrOfPopulation = [...populationOfCuntries]
  .map((countryAverage) => +countryAverage.innerText.replace(/,/g, ''))
  .reduce((acc, next) => acc + next);

const averageOfPopulation = arrOfPopulation / [...populationOfCuntries].length;

outputOfTotalPopulation.innerText = arrOfPopulation
  .toLocaleString();

outputOfAveragePopulation.innerText = averageOfPopulation
  .toLocaleString();
