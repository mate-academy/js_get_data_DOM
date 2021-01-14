'use strict';

const populateValues = [...document.querySelectorAll('.population')]
  .map(e => +e.textContent.replaceAll(',', ''));
const sum = populateValues.reduce((prev, e) => prev + e);
const average = sum / populateValues.length;

const avgPopulationSpan = document.querySelector('.average-population');
const totalPopulationSpan = document.querySelector('.total-population');

avgPopulationSpan.textContent = average.toLocaleString();
totalPopulationSpan.textContent = sum.toLocaleString();
