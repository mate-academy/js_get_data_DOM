'use strict';

const spans = document.querySelectorAll('span.population');
const numberFormSpan = [];

spans.forEach((span) => {
  numberFormSpan.push(parseFloat(span.textContent));
});

const sum = numberFormSpan.reduce((prev, cur) => prev + cur, 0);
const average = sum / numberFormSpan.length;

const averageSpan = document.querySelector('span.average-population');
const totalSpan = document.querySelector('span.total-population');

if (averageSpan) {
  averageSpan.textContent = average.toLocaleString('en-US');
}

if (totalSpan) {
  totalSpan.textContent = sum.toLocaleString('en-US');
}
// write your code here
