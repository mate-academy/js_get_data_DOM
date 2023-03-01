'use strict';

const populations = document.querySelectorAll('.population');
const totalNumber = document.querySelector('.total-population');
const averageNumber = document.querySelector('.average-population');

const populationNumbers = [...populations].map(element =>
  Number(element.innerText.split(',').join('')));

const totalPopulation = populationNumbers.reduce(
  (sum, element) => sum + element, 0);

const averagePopulation = totalPopulation / populations.length;

totalNumber.innerText = totalPopulation.toLocaleString('en-US');
averageNumber.innerText = averagePopulation.toLocaleString('en-US');
