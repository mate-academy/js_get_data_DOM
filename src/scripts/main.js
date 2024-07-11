'use strict';

const populationElements = document.querySelectorAll('.population');

let totalPopulation = 0;

for (const element of populationElements) {
  totalPopulation += Number(element.textContent.replaceAll(',', ''));
}

const totalTitile = document.querySelector('.total-population');

totalTitile.textContent = totalPopulation.toLocaleString();

const avaragePopulation = document.querySelector('.average-population');

avaragePopulation.textContent = (
  totalPopulation / populationElements.length
).toLocaleString();
