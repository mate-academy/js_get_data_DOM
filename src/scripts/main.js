'use strict';

const populationElements = document.querySelectorAll('.population');
const populationNums = [];
let totalAmount = 0;

populationElements.forEach(popElement => {
  const populationNum = +popElement.innerText.split(',').join('');

  totalAmount += populationNum;
  populationNums.push(populationNum);
});

const averagePopulation = Math.floor(totalAmount / populationNums.length);

const totalPopulationEl = document.querySelector('.total-population');
const averagePopulationEl = document.querySelector('.average-population');

totalPopulationEl.innerText = totalAmount.toLocaleString();
averagePopulationEl.innerText = averagePopulation.toLocaleString();
