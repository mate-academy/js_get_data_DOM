'use strict';

const allCountriesInfo = document.querySelectorAll('.population');
const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');

const populationValues = [...allCountriesInfo]
  .map(item => parseInt(item.innerText.split(',').join('')));
const totalAmount = populationValues.reduce((a, b) => a + b, 0);
const averageAmount = totalAmount / populationValues.length;

totalElement.textContent = totalAmount.toLocaleString('en-US');
averageElement.textContent = averageAmount.toLocaleString('en-US');
