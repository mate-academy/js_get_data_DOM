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

function getAllNumbers(arr) {
  return arr.map((el) => +el.textContent.split(',').join(''));
}

function calculateSum(arrOfpopulation) {
  return arrOfpopulation.reduce((acc, curr) => {
    let sum = acc;

    sum += curr;

    return sum;
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
