'use strict';

const populationSpans = document.querySelectorAll('.population');

let totalPopulation = 0;
let numOfCountries = 0;

for (const text of populationSpans) {
  totalPopulation += +text.textContent.split(',').join('');
  numOfCountries++;
}

const demicalFormat = new Intl.NumberFormat('en-US');

const averagePopulation = totalPopulation / numOfCountries;

const spanTotalPopulation = document.querySelector('.total-population');

spanTotalPopulation.textContent = demicalFormat.format(totalPopulation);

const spanAvgPopulation = document.querySelector('.average-population');

spanAvgPopulation.textContent = demicalFormat.format(averagePopulation);
