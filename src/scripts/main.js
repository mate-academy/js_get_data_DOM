'use strict';

// write your code here
const colectionPopulation = document.querySelectorAll('.population');
const arrPopulation = [...colectionPopulation]
  .map(item => +item.innerHTML.replace(/,/g, ''));
const total = arrPopulation.reduce((a, b) => a + b);
const totalAverage = total / arrPopulation.length;
const totalTxt = document.querySelector('.total-population');

totalTxt.textContent = total;

const totalTxtAverage = document.querySelector('.average-population');

totalTxtAverage.textContent = totalAverage;
