'use strict';

const allPop = document.querySelectorAll('.population');
const arrPop = [...allPop].map(number =>
  Number(number.innerText.split(',').join('')));

const totalPop = arrPop.reduce((a, b) => a + b);
const averagePop = totalPop / arrPop.length;

document.querySelector('.total-population')
  .innerHTML = totalPop.toLocaleString('en-US');

document.querySelector('.average-population')
  .innerHTML = averagePop.toLocaleString('en-US');
