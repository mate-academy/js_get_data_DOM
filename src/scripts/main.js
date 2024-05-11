'use strict';

const populationData = document.querySelectorAll('span.population');
const textTotal = document.querySelector('.total-population');
const textAverage = document.querySelector('.average-population');

let totalPopulation = 0;

for (const data of populationData) {
  const numbers = Number.parseFloat(data.innerHTML.replace(/,/g, ''));

  totalPopulation += numbers;
}

const average = totalPopulation / populationData.length;

textTotal.textContent = totalPopulation.toLocaleString('en-US');
textAverage.textContent = average.toLocaleString('en-US');
