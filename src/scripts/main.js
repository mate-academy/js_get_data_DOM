'use strict';

const populationArr = [...document.querySelectorAll('.population')].map(
  (amount) => +amount.innerText.split(',').join(''),
);

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const total = populationArr.reduce((acc, next) => acc + next, 0);
const average =
  populationArr.reduce((acc, next) => acc + next, 0) / populationArr.length;

function getNumericStyle(num) {
  return Number(num).toLocaleString().replace(/\s/g, ',');
}

totalPopulation.innerText = getNumericStyle(total);

averagePopulation.innerText = getNumericStyle(average);
