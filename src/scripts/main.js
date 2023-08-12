'use strict';

// write your code here
const population = document.querySelectorAll('.population');
const populationNumber = [...population].map(number =>
  Number(number.innerHTML.split(',').join('')));

const totalSum = populationNumber.reduce((sum, value) => sum + value);

const average = document.querySelector('.average-population');
const total = document.querySelector('.total-population');

average.innerHTML = (totalSum / populationNumber.length)
  .toLocaleString('en-US');
total.innerHTML = totalSum.toLocaleString('en-US');
