'use strict';

// write your code here
const populationArray = [...document.getElementsByClassName('population')];
const populationNumbers = [];

populationArray.forEach((country) => {
  populationNumbers.push(parseInt(country.outerText.split(',').join('')));
});

const initVal = 0;
const total = populationNumbers.reduce((acc, val) => acc + val, initVal);
const average = total / populationNumbers.length;

document.getElementsByClassName('total-population')[0].outerText = total;
document.getElementsByClassName('average-population')[0].outerText = average;
