'use strict';

// write your code here

const populationtEl = document.querySelectorAll('.population');
const totalPopulationEl = document.querySelector('.total-population');
const avaragePop = document.querySelector('.average-population');

const populations = [...populationtEl]
  .map((item) => +item.innerText.split(',').join(''));
const total = populations.reduce((a, b) => a + b, 0);
const average = total / populations.length;

totalPopulationEl.textContent = total.toLocaleString('en-US');
avaragePop.textContent = average.toLocaleString('en-US');
