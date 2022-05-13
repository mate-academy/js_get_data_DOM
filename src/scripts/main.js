'use strict';

const arrOfEl = [...document.querySelectorAll('.population')];
const arrOfNum = arrOfEl.map(e => +e.textContent.split(',').join(''));
const totalSum = arrOfNum.reduce((a, b) => a + b);
const averageSum = totalSum / arrOfNum.length;

const totalPopulationSpan = document.querySelector('.total-population');

totalPopulationSpan.textContent = totalSum.toLocaleString('en-US');

const averagePopulationSpan = document.querySelector('.average-population');

averagePopulationSpan.textContent = averageSum.toLocaleString('en-US');
