'use strict';

const populationElements = document.querySelectorAll('.population');
const sumSpan = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

let sum = 0;

for (const span of populationElements) {
  const number = span.innerHTML.split(',').join('');
  sum += +number;
};

const totalAverage = sum / populationElements.length;
sumSpan.innerText = `${sum.toLocaleString('en-US')}`;
average.innerText = `${totalAverage.toLocaleString('en-US')}`;
