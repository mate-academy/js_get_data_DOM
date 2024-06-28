'use strict';

// write your code here
const populationElements = document.querySelectorAll('.population');
const populations = [];

for (const element of populationElements) {
  const number = parseInt(element.textContent.replace(/,/g, ''));

  if (!isNaN(number)) {
    populations.push(number);
  }
}

const totalPopulation = populations.reduce((acc, num) => acc + num, 0);
const averagePopulation = totalPopulation / populations.length;

const formatedTotal = totalPopulation.toLocaleString('en-US');
const formatedAverage = averagePopulation.toLocaleString('en-US');

document.querySelector('.total-population').textContent = formatedTotal;
document.querySelector('.average-population').textContent = formatedAverage;
