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

function populationStr(num) {
  const str = num.toString();

  let result = '';
  let start;

  if (str.length % 3 === 0) {
    start = 1;
  };

  if (str.length % 3 === 1) {
    start = 3;
  };

  if (str.length % 3 === 2) {
    start = 2;
  };

  for (let i = 0; i < str.length; i++) {
    result += str[i];

    if ((i + start) % 3 === 0 && i + 1 < str.length) {
      result += ',';
    }
  }

  return result;
};

const totalPopulationStr = populationStr(totalPopulation);
const avgPopulationStr = populationStr(avgAmountPopulation);

spanCalculateItTotal.replaceWith(totalPopulationStr);
spanCalculateItAverage.replaceWith(avgPopulationStr);
