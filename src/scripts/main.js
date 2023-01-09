'use strict';

const populationValues = [...document.querySelectorAll('.population')];
const populationTotal = populationValues.reduce((a, b) => {
  return a + +b.textContent.split(',').join('');
}, 0);
const populationAverage = populationTotal / populationValues.length;
const averageSpan = document.querySelector('.average-population');
const totalSpan = document.querySelector('.total-population');

averageSpan.textContent = populationAverage.toLocaleString('en-Us');
totalSpan.textContent = populationTotal.toLocaleString('en-Us');
