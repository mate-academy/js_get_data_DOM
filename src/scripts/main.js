'use strict';

const populations = document.querySelectorAll('.population');
const totalSpan = document.querySelector('.total-population');
const averageSpan = document.querySelector('.average-population');

let sum = 0;
const count = populations.length;

populations.forEach((item) => {
  sum += parseInt(item.textContent.replace(/,/g, ''), 10);
});

const average = sum / count;

const formatNumber = (item) => item.toLocaleString();

totalSpan.textContent = formatNumber(sum);
averageSpan.textContent = formatNumber(Math.round(average));
