'use strict';

let count = 0;
let total = 0;

const populationClassList = document.getElementsByClassName('population');

for (const countryPopulation of populationClassList) {
  const number = parseInt(countryPopulation.textContent.replaceAll(',', ''));

  if (!isNaN(number)) {
    count++;
    total += number;
  }
}

const totalPopulationClass = document.querySelector('.total-population');
const averagepopulationClass = document.querySelector('.average-population');

totalPopulationClass.textContent = total.toLocaleString('en-US');
averagepopulationClass.textContent = (total / count).toLocaleString('en-US');
