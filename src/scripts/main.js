'use strict';
// write your code here

const population = document.querySelectorAll('.population');

function populationNum(currentPupulation) {
  return +currentPupulation.innerText.replaceAll(',', '');
}

const populationArray = [...population].map(populationNum);
const totalPopulation = populationArray.reduce(
  (sum, currentValue) => sum + currentValue);
const avgAmountPopulation = totalPopulation / populationArray.length;

const spanCalculateItTotal = document.querySelector('.total-population');
const spanCalculateItAverage = document.querySelector('.average-population');

spanCalculateItTotal.replaceWith(totalPopulation.toLocaleString('en-US'));
spanCalculateItAverage.replaceWith(avgAmountPopulation.toLocaleString('en-US'));
