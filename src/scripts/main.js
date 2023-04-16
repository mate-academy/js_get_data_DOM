'use strict';

const populationList = document.querySelectorAll('.population');

const totalPopulation = [...populationList].reduce((acc, item) =>
  acc + parseInt(item.textContent.replace(/,/g, '')), 0);

const numberOfCountries = populationList.length;
const averagePopulation = totalPopulation / numberOfCountries;

const formattedTotalPopulation = totalPopulation.toLocaleString('en-US');
const formattedAveragePopulation = averagePopulation.toLocaleString('en-US');

document.querySelector('.total-population')
  .textContent = formattedTotalPopulation;

document.querySelector('.average-population')
  .textContent = formattedAveragePopulation;
