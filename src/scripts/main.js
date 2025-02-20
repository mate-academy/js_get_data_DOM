'use strict';

const allSpans = [...document.getElementsByClassName('population')];
let totalValue = 0;

for (let i = 0; i < allSpans.length; i++) {
  const num = +allSpans[i].textContent.split(',').join('');

  totalValue += num;
}

const averageValue = totalValue / allSpans.length;

const totalChange = document.querySelector('.total-population');
const averageChange = document.querySelector('.average-population');

if (totalChange) {
  totalChange.textContent = totalValue;
}

if (averageChange) {
  averageChange.textContent = averageValue.toFixed(2);
}
