'use strict';

const totalSpan = document.querySelector('.total-population');
const avarageSpan = document.querySelector('.average-population');
const spanList = document.querySelectorAll('.population');
let sum = 0;

spanList.forEach(span => {
  const clearSpan = span.textContent.split(',').join('');

  sum += +clearSpan;
});

const average = sum / spanList.length;

totalSpan.textContent = sum.toLocaleString('en-US');
avarageSpan.textContent = average.toLocaleString('en-US');
