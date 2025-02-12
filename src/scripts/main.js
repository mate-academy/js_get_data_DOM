'use strict';

// write your code here
const population = document.querySelectorAll('.population');
const totalSpan = document.querySelector('.total-population');
const averageSpan = document.querySelector('.average-population');
let counter = 0;
let average = 0;
let total = 0;

for (const pop of population) {
  counter++;
  total += +pop.textContent.split(',').join('');
}

average = (+total / counter).toLocaleString('en-US');
total = total.toLocaleString('en-US');

totalSpan.textContent = total;
averageSpan.textContent = average;
