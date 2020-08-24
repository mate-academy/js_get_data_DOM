'use strict';

// write your code here
const populationsList = document.querySelectorAll('.population');
const totalList = document.querySelector('.total-population');
const averageList = document.querySelector('.average-population');

const populations = [...populationsList].map(country =>
  +country.textContent
    .split(',')
    .join('')
);

const total = populations.reduce((a, b) => a + b);
const average = total / populations.length;

totalList.textContent = total.toLocaleString('en-US');
averageList.textContent = average.toLocaleString('en-US');
