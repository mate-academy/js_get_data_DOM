'use strict';

const populationAll = document.querySelectorAll('.population');
const averagePopulationElement = document.querySelector('.average-population');
const totalPopulationElement = document.querySelector('.total-population');

function numArray(param) {
  const arr = [...param].map(item => item.innerText);
  const parseArray = arr.map(item => parseInt(item.split(',').join('')));

  return parseArray;
}

function numToText(num) {
  // return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return num.toLocaleString('en-US');
}

const population = numArray(populationAll);
const totalPopulation = population
  .reduce((total, currentValue) => total + currentValue);
const averagePopulation = totalPopulation / population.length;

if (averagePopulationElement) {
  averagePopulationElement.textContent = numToText(averagePopulation);
}

if (totalPopulationElement) {
  totalPopulationElement.textContent = numToText(totalPopulation);
}
