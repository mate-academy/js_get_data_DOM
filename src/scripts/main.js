'use strict';

const countries = [...document.querySelectorAll('.population')];
const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');

const populationNumbers = countries.map((element) => {
  const text = element.textContent.replaceAll(',', '');

  return +text;
});

const sumNumbers = populationNumbers.reduce((accumulator, currentNumber) => {
  return accumulator + currentNumber;
}, 0);

const averageNumbers = Math.floor(sumNumbers / countries.length);

totalElement.textContent = sumNumbers.toLocaleString('en-US');
averageElement.textContent = averageNumbers.toLocaleString('en-US');
