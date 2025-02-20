'use strict';

const populationElements = document.querySelectorAll('.population');

function parsePopulation(element) {
  const num = Number(element.textContent.replace(/,/g, ''));

  return isNaN(num) ? 0 : num;
}

const populationValues = Array.from(populationElements, parsePopulation);

const totalPopulation = populationValues.reduce((sum, value) => sum + value, 0);

const averagePopulation = totalPopulation / populationValues.length;

function updateElement(selector, value) {
  document.querySelector(selector).textContent = value.toLocaleString('en-US');
}

updateElement('.total-population', totalPopulation);
updateElement('.average-population', averagePopulation);
