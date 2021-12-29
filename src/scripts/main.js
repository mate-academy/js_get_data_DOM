'use strict';

const numbersOfPopulation = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

const nums = [...numbersOfPopulation].map(el =>
  el.innerHTML.split(',').join(''));

const sum = nums.reduce((a, b) => +a + +b);
const midlVal = sum / nums.length;

total.innerHTML = sum.toLocaleString('en-US');
average.innerHTML = midlVal.toLocaleString('en-US');
