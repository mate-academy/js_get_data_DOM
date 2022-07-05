'use strict';

const populations = document.querySelectorAll('.population');
const countriesCount = populations.length;
let totalPopulation = 0;

for (const population of populations) {
  const populationNumber = +population.innerText.replace(/,/g, '');

  totalPopulation += populationNumber;
}

document.querySelector('.total-population').innerText
  = totalPopulation.toLocaleString('en-us');

document.querySelector('.average-population').innerText
  = (totalPopulation / countriesCount).toLocaleString('en-US');
