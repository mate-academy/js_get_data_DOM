'use strict';

const populationElements = document.querySelectorAll('.population');

let totalPopulation = 0;

populationElements.forEach((element) => {
  const numberValue = Number(element.textContent.replace(/,/g, ''));

  if (!isNaN(numberValue)) {
    totalPopulation += numberValue;
  }
});

const averagePopulation = Math.round(
  totalPopulation / populationElements.length,
);

document.querySelector('.total-population').textContent =
  totalPopulation.toLocaleString('en-US');

document.querySelector('.average-population').textContent =
  averagePopulation.toLocaleString('en-US');
