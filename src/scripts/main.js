'use strict';

const allSpans = document.querySelectorAll('.population');
const totalSpan = document.querySelector('.total-population');
const averageSpan = document.querySelector('.average-population');
let totalValue = 0;

for (let i = 0; i < allSpans.length; i++) {
  let arr = [];

  arr = allSpans[i].textContent.split(',');

  const value = arr.join('');

  totalValue += +value;
}

const averageValue = Math.ceil(totalValue / allSpans.length);

const totalValueStr = totalValue.toString().split('');
const averageValueStr = ('' + averageValue).split('');

const resTotal = [
  ...totalValueStr.slice(0, 1),
  ',',
  ...totalValueStr.slice(1, 4),
  ',',
  ...totalValueStr.slice(4, -3),
  ',',
  ...totalValueStr.slice(-3),
];

const resAverage = [
  ...averageValueStr.slice(0, 3),
  ',',
  ...averageValueStr.slice(3, 6),
  ',',
  ...averageValueStr.slice(6),
];

totalSpan.innerHTML = resTotal.join('');
averageSpan.innerHTML = resAverage.join('');
