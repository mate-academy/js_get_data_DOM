'use strict';

// write your code here
const populationElements = document.querySelectorAll('.population');

const totalPopulation = Array.from(populationElements)
  .map(element => Number(element.textContent.replace(/,/g, '')))
  .reduce((sum, value) => sum + value, 0);

const b = totalPopulation / 10;

document.querySelector('.total-population').textContent = totalPopulation.toLocaleString('en-US');
document.querySelector('.average-population').textContent = b.toLocaleString('en-US');
