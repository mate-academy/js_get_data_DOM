'use strict';

const allSpan = document.querySelectorAll('.population');
const sumSpan = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

let sum = 0;
let count = 0;

for (const span of allSpan) {
  const number = span.innerHTML.split(',').join('');

  sum += +number;
  count++;
};

const totalAverage = sum / count;

sumSpan.innerText = `${sum.toLocaleString('en-US')}`;
average.innerText = `${totalAverage.toLocaleString('en-US')}`;
