'use strict';

let calculate1 = 0;
let calculate2 = 0;
let totalCalculate = '';
const text = document.getElementsByClassName('population');
const totalPopulation = document.querySelector('span.total-population');
const averagePopulation = document.querySelector('span.average-population');

for (let i = 0; i < text.length; i++) {
  calculate1 += +text[i].textContent.split(',').join('');
}

calculate1 = calculate1 + '';
calculate2 = Math.round(calculate1 / text.length) + '';

for (let i = calculate1.length - 1; i >= 0; i--) {
  if (i === 9 || i === 6 || i === 3) {
    totalCalculate += calculate1[calculate1.length - 1 - i] + ',';
  } else {
    totalCalculate += calculate1[calculate1.length - 1 - i];
  }
}

let averageCalculate = '';

for (let i = calculate2.length - 1; i >= 0; i--) {
  if (i === 6 || i === 3) {
    averageCalculate += calculate2[calculate2.length - 1 - i] + ',';
  } else {
    averageCalculate += calculate2[calculate2.length - 1 - i];
  }
}

totalPopulation.textContent = totalCalculate;
averagePopulation.textContent = averageCalculate;
