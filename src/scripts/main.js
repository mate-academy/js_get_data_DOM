'use strict';

const populationElements = document.querySelectorAll('.population');

let totalPopulation = 0;

for (const element of populationElements) {
  totalPopulation += +element.innerHTML.replaceAll(',', '');
}

const averagePopulation = totalPopulation / populationElements.length;

document.querySelector('.total-population').innerHTML =
  totalPopulation.toLocaleString('en-US');

document.querySelector('.average-population').innerHTML =
  averagePopulation.toLocaleString('en-US');
