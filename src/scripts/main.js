'use strict';

const namesOfClasses = document.querySelectorAll('.population');
const numbers = [...namesOfClasses];
const totalNumbers = numbers
  .map(num => Number(num.innerText.split(',').join('')))
  .reduce((accum, nextNum) => accum + nextNum, 0);

const averageNumbrers = totalNumbers / numbers.length;

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

totalPopulation.innerText = totalNumbers.toLocaleString('en-US');
averagePopulation.innerText = averageNumbrers.toLocaleString('en-US');
