'use strict';

// write your code here
const populations = document.getElementsByClassName('population');

const sum = [];

for (let i = 0; i < populations.length; i++) {
  sum[i] = populations[i].innerText.replace(/,/g, '');
  sum[i] = parseInt(sum[i]);
}

const total = sum.reduce((acc, curr) => acc + curr, 0);

const length = sum.length;
const avg = Math.floor(total / length);

const formatNumber = (num) => num.toLocaleString();

document.querySelector('.total-population').textContent = formatNumber(total);
document.querySelector('.average-population').textContent = formatNumber(avg);
