'use strict';

const populationElements = document.querySelectorAll('.population');

const totalPopulation = [...populationElements]
  .map(el => el.textContent)
  .map(item => +item.replaceAll(',', ''))
  .reduce((acc, item) => acc + item, 0);

const averagePopulation = totalPopulation / populationElements.length;

const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');

totalElement.innerText = totalPopulation.toLocaleString('en-US');
averageElement.innerText = averagePopulation.toLocaleString('en-US');
