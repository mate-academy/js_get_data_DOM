'use strict';

// write your code here
const populationList = document.getElementsByClassName('population');
let sum = 0;
let average = 0;
let mainArray = [];

for (let i = 0; i < populationList.length; i++) {
  const population = populationList[i].innerHTML;

  mainArray.push(population);
}

for (let i = 0; i < mainArray.length; i++) {
  mainArray[i] = parseFloat(mainArray[i]);
  sum += mainArray[i];
}

average = sum / mainArray.length;

document.querySelector('.total-population').innerHTML =
  sum.toLocaleString('en-US');

document.querySelector('.average-population').innerHTML =
  average.toLocaleString('en-US');
