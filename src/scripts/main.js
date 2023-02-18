'use strict';

const spanElements = document.querySelectorAll('.population');
const values = [...spanElements]
  .map(item => item.innerHTML)
  .map(item => parseInt(item.split(',').join('')));

const total = values.reduce((sum, item) => sum + item);
const average = total / values.length;

const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');

totalElement.textContent = total.toLocaleString('en-US');
averageElement.textContent = average.toLocaleString('en-US');
