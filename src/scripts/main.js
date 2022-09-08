'use strict';

const population = document.querySelectorAll('.population');

const text = [...population].map(data =>
  parseInt(data.textContent
    .split(',')
    .join('')));

const total = text.reduce((prev, sum) => prev + sum, 0);

const average = total / text.length;

const totalResult = document.querySelector('.total-population');

const averageResult = document.getElementsByClassName('.average-population');

totalResult.textContent = total.toLocaleString('en-Us');

averageResult.textContent = average.toLocaleString('en-Us');
