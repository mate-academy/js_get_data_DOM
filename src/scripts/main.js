'use strict';

// write your code here
const spanValue = [];

const spans = document.getElementsByClassName('population');

for (const span of spans) {
  const value = span.textContent;

  const valueNumber = value.split(',').join('');

  if (!isNaN(valueNumber) && valueNumber !== '') {
    const number = Number(valueNumber);

    spanValue.push(number);
  }
}

const total = spanValue.reduce(
  (prevValue, currentValue) => prevValue + currentValue,
  0,
);

const average = Math.round(total / spanValue.length);

const elementTotal = document.querySelector('.total-population');
const elementAverage = document.querySelector('.average-population');

elementTotal.textContent = total.toLocaleString('en-US');
elementAverage.textContent = average.toLocaleString('en-US');
