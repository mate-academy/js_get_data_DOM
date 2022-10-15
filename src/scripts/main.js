/* eslint-disable no-console */
'use strict';

const allPop = document.querySelectorAll('.population');
const arrPop = [...allPop].map(number => +number.innerText.split(',').join(''));

const totalPop = arrPop.reduce((a, b) => a + b);
const averagePop = totalPop / arrPop.length;

const totalPopArr = String(totalPop).split('').reverse();
let totalPopComas = [];

for (let i = 0; i < totalPopArr.length; i++) {
  totalPopComas.push(totalPopArr[i]);

  if ((i + 1) % 3 === 0 && i !== totalPopArr.length - 1) {
    totalPopComas.push(',');
  }
};

const averagePopArr = String(averagePop).split('').reverse();
let averagePopComas = [];

for (let i = 0; i < averagePopArr.length; i++) {
  averagePopComas.push(averagePopArr[i]);

  if ((i + 1) % 3 === 0 && i !== averagePopArr.length - 1) {
    averagePopComas.push(',');
  }
};

totalPopComas = totalPopComas.reverse().join('');

const elementTotal = document.querySelector('.total-population');

elementTotal.innerText = totalPopComas;

averagePopComas = averagePopComas.reverse().join('');

const elementAverage = document.querySelector('.average-population');

elementAverage.innerText = averagePopComas;
