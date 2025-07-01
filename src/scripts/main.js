'use strict';

const populationList = document.querySelectorAll('.population');

const countriesCount = populationList.length;

let totalPopulation = 0;

for (const pop of populationList) {
  const normalizedPop = +pop.textContent.split(',').join('');

  totalPopulation += normalizedPop;
}

const averagePopulation = totalPopulation / countriesCount;

document.querySelector('.total-population').textContent =
  totalPopulation.toLocaleString('en-US');

document.querySelector('.average-population').textContent =
  averagePopulation.toLocaleString('en-US');
