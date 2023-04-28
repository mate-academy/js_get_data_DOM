'use strict';

const totalOutput = document.querySelector('.total-population');
const averageOutput = document.querySelector('.average-population');
const populationCollection = document.querySelectorAll('.population');

const populationArray = [...populationCollection].map(el => {
  return +el.textContent.replaceAll(',', '');
});

const totalPopulation = populationArray.reduce((total, next) => total + next);
const averagePopulation = totalPopulation / populationArray.length;

totalOutput.textContent = totalPopulation.toLocaleString('en-GB');
averageOutput.textContent = averagePopulation.toLocaleString('en-GB');
