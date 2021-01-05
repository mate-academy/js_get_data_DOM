'use strict';

const population = document.querySelectorAll('.population');
const arrPop = [...population].map(a => +a.innerText.split(',').join(''));
const totalPop = arrPop.reduce((a, b) => a + b);
const averagePop = totalPop / arrPop.length;

document.querySelector('.total-population')
  .textContent = totalPop.toLocaleString('en-US');

document.querySelector('.average-population')
  .textContent = averagePop.toLocaleString('en-US');
