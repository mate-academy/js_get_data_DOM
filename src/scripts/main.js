'use strict';

// write your code here
const collectionOFpopulation = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const populationNumbers = [...collectionOFpopulation].map(value => {
  return Number(value.textContent.split(',').join(''));
});

const calculatedTotal = populationNumbers.reduce((acc, val) => acc + val);
const calculatedAverage = calculatedTotal / populationNumbers.length;

totalPopulation.textContent = calculatedTotal.toLocaleString();

averagePopulation.textContent = calculatedAverage.toLocaleString();
