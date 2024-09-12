'use strict';

// write your code here
const populationSpans = document.querySelectorAll('.population');
const populationTextArray = Array
  .from(populationSpans).map(span => span.textContent || span.innerText);

const populationNumbers = populationTextArray
  .map(text => parseInt(text.replace(/,/g, '')));

const totalPopulation = populationNumbers.reduce((a, b) => a + b, 0);
const averagePopulation = totalPopulation / populationNumbers.length;

const totalPopulationSpan = document
  .getElementsByClassName('total-population')[0];

const totalPopulationFormatted = totalPopulation
  .toLocaleString('en-US');

totalPopulationSpan.textContent = totalPopulationFormatted;

const averagePopulationSpan = document
  .getElementsByClassName('average-population')[0];

const averagePopulationFormatted = averagePopulation
  .toLocaleString('en-US');

averagePopulationSpan.textContent = averagePopulationFormatted;
