'use strict';

let totalTemp = 0;

const populationByCountries = document.querySelectorAll('.population');

for (const population of [...populationByCountries]) {
  totalTemp += Number(population.innerText.replace(/,/g, ''));
}

const total = totalTemp.toLocaleString();

const average = (
  totalTemp / [...populationByCountries].length
).toLocaleString();

document.querySelector('.total-population').innerText = total;
document.querySelector('.average-population').innerText = average;
