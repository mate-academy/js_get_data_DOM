'use strict';

const population = document.querySelectorAll('.population');
const totalLine = document.querySelector('.total-population');
const averageLine = document.querySelector('.average-population');

const sum = [];

for (const key of population) {
  sum.push(Number(key.textContent.split(',').join('')));
}

const total = sum.reduce((a, b) => a + b);
const average = total / sum.length;

totalLine.textContent = total.toLocaleString('en-US');
averageLine.textContent = average.toLocaleString('en-US');
