'use strict';

const populationElements = document.querySelectorAll('.population');
let totalAmount = 0;

populationElements.forEach(popElement => {
  const populationNum = +popElement.innerText.split(',').join('');

  totalAmount += populationNum;
});

const averagePopulation = Math.floor(totalAmount / populationElements.length);

const totalPopulationEl = document.querySelector('.total-population');
const averagePopulationEl = document.querySelector('.average-population');

totalPopulationEl.innerText = totalAmount.toLocaleString('en-US');
averagePopulationEl.innerText = averagePopulation.toLocaleString('en-US');
