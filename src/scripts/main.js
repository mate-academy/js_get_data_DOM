'use strict';

const spanTags = document.querySelectorAll('.population');
const sumSpan = document.querySelector('.total-population');
const averageSpan = document.querySelector('.average-population');

let sum = 0;
let count = 0;

for (const span of spanTags) {
  const number = span.textContent.split(',').join('');

  sum += +number;
  count++;
};

const totalAverage = sum / count;

sumSpan.innerText = sum.toLocaleString('en-US');
averageSpan.innerText = totalAverage.toLocaleString('en-US');
