'use strict';

// write your code here
const spanElements = document.querySelectorAll('.population');
const values = [...spanElements]
  .map(item => item.innerHTML)
  .map(item => parseInt(item.split(',').join('')));

const total = values.reduce((a, b) => a + b);
const average = total / values.length;

const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');

totalElement.innerText = total.toLocaleString('en-Us');
averageElement.innerText = average.toLocaleString('en-Us');
