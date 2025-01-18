'use strict';

const spans = document.querySelectorAll('span.population');

const populations = [...spans];

let total = 0;

for (const elem of populations) {
  const newElem = +elem.innerHTML.split(',').join('');

  total += newElem;
}

const average = total / populations.length;

function formatNumber(num) {
  return num.toLocaleString('en-US');
}

const totalData = document.querySelector('.total-population');
const averageData = document.querySelector('.average-population');

totalData.innerHTML = formatNumber(total);
averageData.innerHTML = formatNumber(average);
