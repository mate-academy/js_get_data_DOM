'use strict';

const pops = [...document.querySelectorAll('.population')]
  .map(el => parseInt(el.textContent.replace(/,/g, '')))
  .filter(num => !isNaN(num));

const total = pops.reduce((acc, num) => acc + num, 0);
const avg = total / pops.length;

const formattedTotal = total.toLocaleString('en-US');
const formattedAvg = avg.toLocaleString('en-US');

document.querySelector('.total-population').textContent = formattedTotal;
document.querySelector('.average-population').textContent = formattedAvg;
