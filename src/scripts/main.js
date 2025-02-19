'use strict';

const populanions = [...document.querySelectorAll('span.population')].map(
  (num) => Number(num.innerText.split(',').join('')),
);

const total = populanions.reduce((sum, num) => sum + num, 0);
const average = total / populanions.length;

const innerTextTotal = document.querySelector('span.total-population');
const innerTextAvarage = document.querySelector('span.average-population');

innerTextTotal.innerText = total.toLocaleString('en-US');
innerTextAvarage.innerText = average.toLocaleString('en-US');
