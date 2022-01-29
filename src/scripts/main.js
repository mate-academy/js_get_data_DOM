'use strict';

function numberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const populationsDocuments = document.querySelectorAll('.population');
const totalPopulationDocument = document.querySelector('.total-population');
const avaragePopulationDocument = document.querySelector('.average-population');

const totalPopulation = [...populationsDocuments]
  .map(number => +number.innerText.split(',').join(''))
  .reduce((a, b) => a + b);

const avaragePopulation = totalPopulation / populationsDocuments.length;

totalPopulationDocument.textContent = numberWithCommas(totalPopulation);
avaragePopulationDocument.textContent = numberWithCommas(avaragePopulation);
