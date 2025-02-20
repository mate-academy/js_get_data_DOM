'use strict';

const totalPopulationElement = document.querySelector('.total-population');
const averagePopulationElement = document.querySelector('.average-population');

let totalPopulation = 0;
let totalCountries = 0;

for (const countryPopulation of document.querySelectorAll('.population')) {
  totalPopulation += +countryPopulation.innerText.replaceAll(',', '');
  totalCountries += 1;
}

const averagePopulation = Math.round(totalPopulation / totalCountries);

const formatter = new Intl.NumberFormat('en-US');

totalPopulationElement.innerText = formatter.format(totalPopulation);
averagePopulationElement.innerText = formatter.format(averagePopulation);
