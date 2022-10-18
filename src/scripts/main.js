'use strict';

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const popu = document.querySelectorAll('.population');

const arrPopu = [...popu];
let total = 0;

for (const chap of arrPopu) {
  const country = chap.textContent.split('');

  let temporaryStr = '';

  for (const numb of country) {
    if (numb !== ',') {
      temporaryStr += numb;
    }
  }
  total += +temporaryStr;
}

const average = total / arrPopu.length;
const addTotal = document.querySelector('.total-population');

addTotal.innerHTML = `${numberWithCommas(total)}`;

const addAverage = document.querySelector('.average-population');

addAverage.innerHTML = `${numberWithCommas(average)}`;
