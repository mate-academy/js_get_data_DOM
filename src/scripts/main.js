'use strict';

// write your code here
const dataElements = document.getElementsByClassName('population');
const totalEl = document.querySelector('.total-population');
const averageEl = document.querySelector('.average-population');

const data = [...dataElements]
  .map(element => +element.textContent.split(',').join(''));

const total = data.reduce((a, b) => a + b, 0);
const average = total / data.length;

totalEl.textContent = total.toLocaleString('en-US');
averageEl.textContent = average.toLocaleString('en-US');
