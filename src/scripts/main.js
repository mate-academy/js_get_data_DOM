'use strict';

// Variables
const populationData = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

// Calculation
const populationList = [...populationData].map(data =>
  Number(data.innerText.replaceAll(',', '')));
const total = populationList.reduce((amount, population) =>
  amount + population, 0);

const average = total / populationList.length;

// Add the calculated data to the page
totalPopulation.innerText = total.toLocaleString('en-GB');
averagePopulation.innerText = average.toLocaleString('en-GB');
