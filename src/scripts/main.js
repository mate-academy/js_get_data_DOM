'use strict';
// Working with data
// Making array from textContant

const populationData = Array.from(document.querySelectorAll('span.population'));

// Convert data to String
const dataToString = populationData.map((span) => span.textContent);

// Convert data to Number
const dataToNums = dataToString.map((str) => +str.replaceAll(',', ''));

// Receiving of sum from all numbers
const totalPopulation = dataToNums.reduce((a, b) => a + b);

// Receiving average of all numbers
const average = Math.floor(totalPopulation / dataToNums.length);

// Replacing data on the page
document.querySelector('span.total-population').textContent =
  totalPopulation.toLocaleString('en-US');

document.querySelector('span.average-population').textContent =
  average.toLocaleString('en-US');
