'use strict';

const populations = document.querySelectorAll('.population');
const countriesCount = populations.length;
let totalPopulation = 0;

for (const population of populations) {
  const populationNumber = +population.innerHTML.replace(/,/g, '');

  totalPopulation += populationNumber;
}

document.querySelector('.total-population').innerHTML
  = totalPopulation.toLocaleString('en-us');

document.querySelector('.average-population').innerHTML
  = (totalPopulation / countriesCount).toLocaleString('en-US');
