'use strict';

const allPopulation
  = [...document.querySelectorAll('.population')]
    .map(obj => obj.innerText).map(value => convertToNumber(value));

const totalPopulationValue = allPopulation
  .reduce((total, population) => total + population, 0);

const averagePopulationValue = totalPopulationValue / allPopulation.length;

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

totalPopulation.innerText = convertToString(totalPopulationValue);
averagePopulation.innerText = convertToString(averagePopulationValue);

function convertToNumber(string) {
  return Number(string.split(',').join(''));
};

function convertToString(number) {
  const check = number.toString();
  let result = '';
  let count = 1;

  for (let i = check.length - 1; i >= 0; i--) {
    if (count % 3 === 0) {
      result = ',' + check[i] + result;
      count++;
    } else {
      result = check[i] + result;
      count++;
    };
  };

  return result[0] === ','
    ? result.slice(1)
    : result;
};
