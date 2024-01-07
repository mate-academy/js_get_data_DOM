'use strict';

// write your code here
const populationsSpan = document.querySelectorAll('.population');

const totalSpan = document.querySelector('.total-population');
const averageSpan = document.querySelector('.average-population');

const total = [...populationsSpan].reduce(
  (accumulator, currentValue) =>
    accumulator + (+currentValue.textContent.replaceAll(',', '')),
  0,
);

const average = total / populationsSpan.length;

totalSpan.innerText = total.toLocaleString('en-US');
averageSpan.innerText = average.toLocaleString('en-US');
