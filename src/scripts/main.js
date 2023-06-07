'use strict';

const population = document.querySelectorAll('.population');
const totalText = document.querySelector('.total-population');
const averageText = document.querySelector('.average-population');

const numbersArray = [...population]
  .map(number => +number.innerText.split(',').join(''));

const sum = numbersArray.reduce((a, b) => a + b);

totalText.innerText = sum.toLocaleString('en-US');
averageText.innerText = (sum / numbersArray.length).toLocaleString('en-US');
