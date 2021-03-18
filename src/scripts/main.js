'use strict';

const numberToString = function(number) {
  const string = number.toString();
  const output = [];

  let substring = '';

  for (let i = string.length - 1; i >= 0; i--) {
    substring = string[i] + substring;

    if (substring.length > 2 || i === 0) {
      output.unshift(substring);
      substring = '';
    }
  }

  return output.join(',');
};

let populationValues = document.querySelectorAll('.population');

populationValues
= [...populationValues].map(value => +value.innerText.split(',').join(''));

const totalValue = populationValues.reduce((total, currentValue) => {
  return total + currentValue;
}, 0);

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

totalPopulation.textContent = numberToString(totalValue);

averagePopulation.textContent
= numberToString(totalValue / populationValues.length);
