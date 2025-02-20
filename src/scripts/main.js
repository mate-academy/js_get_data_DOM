'use strict';

const populationElements = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
let total = 0;
let average = 0;

const populationNumbers = Array.from(populationElements).map((el) => {
  const text = el.textContent.replace(/,/g, '');

  return parseFloat(text);
});

for (let i = 0; i < populationNumbers.length; i++) {
  total += populationNumbers[i];
}

average = total / populationNumbers.length;

const formattedTotal = total.toLocaleString('en-US');
const formattedAverage = average.toLocaleString('en-US');

totalPopulation.textContent = formattedTotal;
averagePopulation.textContent = formattedAverage;
