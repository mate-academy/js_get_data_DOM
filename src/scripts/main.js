'use strict';

const [...populations] = document.querySelectorAll('.population');
const averagePopulationSpan = document.querySelector('.average-population');
const totalPopulationSpan = document.querySelector('.total-population');
const populationsAsNums = getAllNumbers(populations);
const totalSum = calculateSum(populationsAsNums);
const numberOfCountries = populations.length;
const totalSumFormated = populationFormated(totalSum);
const averagePopulation = averageCalc(totalSum, numberOfCountries);
const averageFormated = populationFormated(averagePopulation);

function getAllNumbers(numbers) {
  return numbers.map((number) => Number(number.textContent.split(',').join('')));
}

function calculateSum(population) {
  return population.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
}

function averageCalc(num, dataQuantity) {
  return num / dataQuantity;
}

function populationFormated(num) {
  return num.toLocaleString('en-US');
}

function editTextContent(target, content) {
  target.textContent = content;
}

editTextContent(totalPopulationSpan, totalSumFormated);
editTextContent(averagePopulationSpan, averageFormated);
