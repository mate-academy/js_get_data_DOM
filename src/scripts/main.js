'use strict';

// write your code here

const items = document.querySelectorAll('.population');
const populationNumbers = [...items].map(item => +item.innerText
  .split(',').join(''));

const totalValue = populationNumbers.reduce((a, b) => a + b, 0);
const averageValue = totalValue / populationNumbers.length;

const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

total.innerText = totalValue.toLocaleString();
average.innerText = averageValue.toLocaleString();
