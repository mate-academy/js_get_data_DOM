'use strict';

const allNum = document.querySelectorAll('.population');
const spanTotal = document.querySelector('.total-population');
const spanAverage = document.querySelector('.average-population');
const arrNum = [];

for (const value of allNum) {
  const trueValue = +value.innerHTML.replace(/,/g, '');

  arrNum.push(trueValue);
}

const total = arrNum.reduce((a, b) => a + b, 0);
const average = total / 10;

function getFormatNum(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

const rightTotal = getFormatNum(total);
const rightAverage = getFormatNum(average);

spanTotal.textContent = rightTotal;
spanAverage.textContent = rightAverage;
