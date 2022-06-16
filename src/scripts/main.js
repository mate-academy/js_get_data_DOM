'use strict';

const values = document.querySelectorAll('.population');
const data = [...values].map(value => +value.textContent.split(',').join(''));

const total = document.querySelector('.total-population');
const countTotal = data.reduce((a, b) => a + b, 0);

const average = document.querySelector('.average-population');
const countAverage = countTotal / data.length;

total.textContent = countTotal.toLocaleString('en-US');
average.textContent = countAverage.toLocaleString('en-US');
