'use strict';

const allCountriesPopulationData
  = [...document.querySelectorAll('.population')];
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const totalPopulationNumber = allCountriesPopulationData
  .map(span => Number(span.textContent.split(',').join('')))
  .reduce((a, b) => a + b, 0);

totalPopulation.innerText = totalPopulationNumber.toLocaleString('en-US');

averagePopulation
  .innerText = (totalPopulationNumber / allCountriesPopulationData.length)
    .toLocaleString('en-US');
