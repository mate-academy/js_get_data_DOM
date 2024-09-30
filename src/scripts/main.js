'use strict';

const populationElements = document.querySelectorAll('.population');

const sumPopulation = [...populationElements].reduce((acc, element) => {
  return acc + +element.textContent.replaceAll(',', '');
}, 0);

const averagePopulation = sumPopulation / populationElements.length;

document.querySelector('.total-population').textContent =
  sumPopulation.toLocaleString('en-US');

document.querySelector('.average-population').textContent =
  averagePopulation.toLocaleString('en-US');
