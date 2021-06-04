'use strict';

// write your code here
const population = document.querySelectorAll('.population');

let totalAmount = 0;

for (const elem of population) {
  totalAmount += +elem.textContent.split(',').join('');
};

const totalHTML = document.querySelector('.total-population');

totalHTML.textContent = totalAmount.toLocaleString('en-US');

const averHTML = document.querySelector('.average-population');

averHTML.textContent = (Math.round(totalAmount / population.length)
  .toLocaleString('en-US'));
