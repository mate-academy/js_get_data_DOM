'use strict';

const populationArr = [...document.querySelectorAll('.population')].map(item =>
  item.innerHTML);
const numbers = [];

for (const item of populationArr) {
  numbers.push(+item.replace(/[\s.,%]/g, ''));
}

const totalPop = numbers.reduce((a, b) => a + b).toLocaleString('en-US');
const averagePop = (+totalPop.replace(/[\s.,%]/g, '') / +numbers.length)
  .toLocaleString('en-US');

const totalSpan = document.querySelector('.total-population');
const averageSpan = document.querySelector('.average-population');

totalSpan.innerHTML = totalPop;
averageSpan.innerHTML = averagePop;
