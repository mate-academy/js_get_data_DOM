'use strict';

const seach = document.querySelectorAll('.population');
const strSum = document.querySelector('.total-population');
const strAverage = document.querySelector('.average-population');

const arr = [...seach].map(number => {
  return Number(number.innerText.replace(/,/g, ''));
});

const sum = arr.reduce((x, y) => x + y).toLocaleString('en-EN');
const avrg = (arr.reduce((x, y) => x + y) / arr.length).toLocaleString('en-EN');

strSum.replaceWith(sum);
strAverage.replaceWith(avrg);
