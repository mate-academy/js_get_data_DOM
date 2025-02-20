'use strict';

function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const populationElements = document.querySelectorAll('.population');

let totalPopulation = 0;
let count = 0;

populationElements.forEach((element) => {
  const populationText = element.textContent.trim();
  const populationNumber = parseInt(populationText.replace(/,/g, ''), 10);

  if (!isNaN(populationNumber) && populationNumber > 0) {
    totalPopulation += populationNumber;
    count++;
  }
});

const averagePopulation = count > 0 ? totalPopulation / count : 0;

const averageElements = document.querySelectorAll('.average-population');
const totalElements = document.querySelectorAll('.total-population');

averageElements.forEach((element) => {
  element.textContent = formatNumber(averagePopulation.toFixed(0));
});

totalElements.forEach((element) => {
  element.textContent = formatNumber(totalPopulation);
});
