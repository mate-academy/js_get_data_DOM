'use strict';

// write your code here
const populationElements = document.querySelectorAll('.population');
const populationNumbers = [...populationElements]
  .map((element) => element.textContent.replace(/,/g, ''))
  .map((text) => Number(text))
  .filter((number) => !Number.isNaN(number));

const total = populationNumbers.reduce((sum, number) => sum + number, 0);
const average = Math.round(total / populationNumbers.length);
const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');

totalElement.textContent = total.toLocaleString('en-US');
averageElement.textContent = average.toLocaleString('en-US');
