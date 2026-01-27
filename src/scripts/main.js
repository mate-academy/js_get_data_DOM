'use strict';

// write your code here
const populationSpans = document.querySelectorAll('.population');
const populationNumbers = [];

for (const span of populationSpans) {
  const number = parseInt(span.textContent.replace(/,/g, ''), 10);

  if (!isNaN(number)) {
    populationNumbers.push(number);
  }
}

const totalPopulation = populationNumbers.reduce((sum, num) => sum + num, 0);
const averagePopulation = totalPopulation / populationNumbers.length;

const formattedTotal = totalPopulation.toLocaleString();
const formattedAverage = Math.round(averagePopulation).toLocaleString();

document.querySelector('.total-population').textContent = formattedTotal;
document.querySelector('.average-population').textContent = formattedAverage;
