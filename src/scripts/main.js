'use strict';

// write your code here
const arrObjects = [...document.querySelectorAll('.population')];
const arrNum = arrObjects.map((el) => {
  return Number(el.textContent.replaceAll(',', ''));
});

const total = arrNum.reduce((acc, curr) => acc + curr, 0);
const average = Math.round(total / arrNum.length);

const totalToString = total.toLocaleString('en-US');
const averageToString = average.toLocaleString('en-US');

document.querySelector('.total-population').textContent = totalToString;
document.querySelector('.average-population').textContent = averageToString;
