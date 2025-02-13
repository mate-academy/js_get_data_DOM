'use strict';

const spans = document.querySelectorAll('span.population');
const populations = Array.from(spans).map(
  (span) => +span.textContent.replace(/,/g, ''),
);
const total = populations.reduce((accum, currentValue) => {
  return accum + currentValue;
}, 0);
const average = total / populations.length;

const totalSpan = document.querySelector('.total-population');
const averageSpan = document.querySelector('.average-population');

totalSpan.textContent = total.toLocaleString('en-US');
averageSpan.textContent = average.toLocaleString('en-US');
