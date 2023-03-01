'use strict';

const populations = [...document.querySelectorAll('.population')];
const averageSpan = document.querySelector('.average-population');
const totalSpan = document.querySelector('.total-population');

const totalPop = populations.reduce((sum, pop) => (
  sum + +pop.innerText.split(',').join('')
), 0);
const averagePop = totalPop / populations.length;

averageSpan.innerText = averagePop.toLocaleString('en-US');
totalSpan.innerText = totalPop.toLocaleString('en-US');
