'use strict';

const populationElements = document.querySelectorAll('span.population');
const populationData = Array.from(populationElements).map((el) => {
  return parseInt(el.textContent.replace(/,/g, ''), 10);
});
let sum = 0;

for (let i = 0; i < populationData.length; i++) {
  sum += populationData[i];
}

const avarge = sum / populationData.length;

const formattedSum = sum.toLocaleString('en-US');
const totalPopulationElement = document.querySelector('span.total-population');

totalPopulationElement.textContent = formattedSum;

const formattedAvarage = avarge.toLocaleString('en-US');
const totalAvarage = document.querySelector('span.average-population');

totalAvarage.textContent = formattedAvarage;
