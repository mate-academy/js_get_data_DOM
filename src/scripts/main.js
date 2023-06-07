'use strict';

let population = document.querySelectorAll('.population');
const totalText = document.querySelector('.total-population');
const averageText = document.querySelector('.average-population');

[...population] = [...population]
  .map(number => +number.innerText.split(',').join(''));

const sum = population.reduce((a, b) => a + b);

totalText.innerText = sum.toLocaleString('en-US');
averageText.innerText = (sum / population.length).toLocaleString('en-US');
