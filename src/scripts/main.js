'use strict';

// write your code here
const elements = document.getElementsByClassName('population');
const populations = Array.from(elements)
  .map((span) => Number(span.textContent.replace(/,/g, '')))
  .filter((num) => !isNaN(num));

const total = populations.reduce((sum, num) => sum + num, 0);
const average = total / populations.length;

const formatedTotal = total.toLocaleString();
const formatedAverage = Math.round(average).toLocaleString();

document.querySelector('.total-population').textContent = formatedTotal;
document.querySelector('.average-population').textContent = formatedAverage;
