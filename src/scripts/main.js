'use strict';

const populationElements = [...document.querySelectorAll('.population')];

const populationNumbers = populationElements.map((element) => {
  return Number(element.textContent.replaceAll(',', ''));
});

const totalPopulation = populationNumbers.reduce(
  (total, populationItem) => total + populationItem,
  0,
);

const averagePopulation = Math.round(
  totalPopulation / populationNumbers.length,
);

document.querySelector('.total-population').textContent =
  totalPopulation.toLocaleString('en-US');

document.querySelector('.average-population').textContent =
  averagePopulation.toLocaleString('en-US');
