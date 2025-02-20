'use strict';

const items = document.querySelectorAll('.population');

const numbers = [...items].map(item => item.innerText);

const total = numbers.map(el =>
  Number(el.split(',').join(''))).reduce((sum, item) => sum + item);

const result = total.toLocaleString('en-US');

const average = total / 10;

const resultAver = average.toLocaleString('en-US');

const totalPop = document.querySelector('.total-population');

totalPop.textContent = result;

const averagePop = document.querySelector('.average-population');

averagePop.textContent = resultAver;
