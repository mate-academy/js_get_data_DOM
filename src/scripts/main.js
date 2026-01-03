'use strict';

// write your code here

const numbers = document.querySelectorAll('.population');
const result = [];

numbers.forEach((item) => {
  const num = item.textContent.split(',').join('');

  if (!isNaN(num)) {
    result.push(Number(num));
  }
});

const totalSum = result.reduce((prev, cur) => prev + cur, 0);
const average = totalSum / result.length;

const totalElement = document.querySelector('span.total-population');
const averageElement = document.querySelector('span.average-population');

totalElement.textContent = totalSum.toLocaleString('en-US');
averageElement.textContent = average.toLocaleString('en-US');
