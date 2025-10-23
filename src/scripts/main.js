'use strict';

// write your code here
const populationArray = [...document.getElementsByClassName('population')];
const populationNumbers = [];

populationArray.forEach((country) => {
  const value = country.outerText.split(',').join('');

  if (!isNaN(value) && !isNaN(parseFloat(value))) {
    populationNumbers.push(parseInt(value));
  }
});

const initVal = 0;
const total = populationNumbers.reduce((acc, val) => acc + val, initVal);
const average = total / populationNumbers.length;

document.getElementsByClassName('total-population')[0].outerText =
  total.toLocaleString();

document.getElementsByClassName('average-population')[0].outerText =
  average.toLocaleString();
