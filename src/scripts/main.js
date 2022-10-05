'use strict';

const populationCollection = document.querySelectorAll('.population');
const populationArray = [...populationCollection]
  .map(country => +country.innerText.split(',').join(''));

const totalPopulation = populationArray.reduce((a, b) => a + b);
const averagePopulation = totalPopulation / populationArray.length;

const totalPopulationArr = String(totalPopulation).split('').reverse();
let totalPopulationWithComas = [];

for (let i = 0; i < totalPopulationArr.length; i++) {
  totalPopulationWithComas.push(totalPopulationArr[i]);

  if ((i + 1) % 3 === 0 && i !== totalPopulationArr.length - 1) {
    totalPopulationWithComas.push(',');
  }
};

totalPopulationWithComas = totalPopulationWithComas.reverse().join('');

const elementTotal = document.getElementsByClassName('total-population')[0];

elementTotal.innerText = totalPopulationWithComas;

const averagePopulationArr = String(averagePopulation).split('').reverse();
let averagePopulationWithComas = [];

for (let i = 0; i < averagePopulationArr.length; i++) {
  averagePopulationWithComas.push(averagePopulationArr[i]);

  if ((i + 1) % 3 === 0 && i !== averagePopulationArr.length - 1) {
    averagePopulationWithComas.push(',');
  }
};

averagePopulationWithComas = averagePopulationWithComas.reverse().join('');

const elementAverage = document.getElementsByClassName('average-population')[0];

elementAverage.innerText = averagePopulationWithComas;
