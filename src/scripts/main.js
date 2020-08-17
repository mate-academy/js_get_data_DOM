'use strict';

// write your code here
const population = document.querySelectorAll('span.population');

let sumOfPopulation = 0;

for (let i = 0; i < population.length; i++) {
  sumOfPopulation += Number(population[i].textContent.replace(/,/g, ''));
}

function formatNumber(numberWithoutComma) {
  const arrayOfNumbers = String(numberWithoutComma).split('');

  for (let y = arrayOfNumbers.length % 3; y < arrayOfNumbers.length;
    y = y + 3) {
    arrayOfNumbers[y - 1] = arrayOfNumbers[y - 1] + ',';
  }

  const result = arrayOfNumbers.join('');

  return result;
}

const totalPopulation = document.querySelector('span.total-population');

totalPopulation.textContent = formatNumber(sumOfPopulation);

const averagePopulation = document.querySelector('span.average-population');
const averageSum = sumOfPopulation / population.length;

averagePopulation.textContent = formatNumber(averageSum);
