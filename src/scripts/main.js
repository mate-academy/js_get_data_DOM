'use strict';

const populationsDocuments = document.querySelectorAll('.population');
const totalPopulationDocument = document.querySelector('.total-population');
const avaragePopulationDocument = document.querySelector('.average-population');
const totalPopulationText = [];

for (const population of populationsDocuments) {
  totalPopulationText.push(population.innerText);
}

const totalPopulation = totalPopulationText
  .map(population => Number(population.split(',').join('')))
  .reduce((a, b) => a + b);

const avaragePopulation = totalPopulation / populationsDocuments.length;

totalPopulationDocument.innerText = numberWithCommas(totalPopulation);
avaragePopulationDocument.innerText = numberWithCommas(avaragePopulation);

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// write your code here
