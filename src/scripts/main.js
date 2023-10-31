'use strict';

const total = document.querySelectorAll('.population');

const arr = [...total].map(el => +el.textContent.split(',').join(''));

const sum = arr.reduce((acc, el) => {
  return acc + el;
});

const averageSum = sum / total.length;

const calculate = document.querySelector('.total-population');

calculate.textContent = sum.toLocaleString('en-US');

const average = document.querySelector('.average-population');

average.textContent = averageSum.toLocaleString('en-US');
