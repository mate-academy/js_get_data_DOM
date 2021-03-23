'use strict';

const textData = document.querySelectorAll('.population');

const number = [...textData].map(
  country => +country.innerHTML.split(',').join('')
);

const populationTotal = number.reduce((a, b) => a + b, 0);
const populationAverage = populationTotal / number.length;

const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

total.innerHTML = populationTotal.toLocaleString('en-US');
average.innerHTML = populationAverage.toLocaleString('en-US');
