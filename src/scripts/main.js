'use strict';

const populations = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const populationNumbers = [...populations]
  .map(value => value.innerText
    .split('')
    .filter(char => !isNaN(char))
    .join('')
  );

const totalNumber = populationNumbers.reduce((sum, next) =>
  +(sum) + +(next), 0);
const averageNumber = totalNumber / populationNumbers.length;

totalPopulation.innerText = totalNumber.toLocaleString('en-Us');
averagePopulation.innerText = averageNumber.toLocaleString('en-Us');
