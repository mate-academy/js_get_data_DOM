'use strict';

// write your code here
const population = document.querySelectorAll('.population');
const numbers = [...population].map((i) => {
  return +i.textContent.split(',').join('');
});

const totalPop = document.querySelector('.total-population');
const averagePop = document.querySelector('.average-population');

const sum = numbers.reduce((acc, cur) => acc + cur);
const avg = sum / numbers.length;

totalPop.textContent = sum.toLocaleString('en-US');
averagePop.textContent = avg.toLocaleString('en-US');
