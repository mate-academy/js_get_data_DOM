'use strict';

const populationItem = document.querySelectorAll('.population');

const total = [...populationItem].map(item =>
  strToNum(item.innerText))
  .filter(num => !isNaN(num))
  .reduce((accumulator, currentValue) => accumulator + currentValue);

function strToNum(str) {
  return parseInt(str.replace(/,/g, ''));
}
const result = total.toLocaleString('en-US');

const average = total / [...populationItem].length;

const resultAver = average.toLocaleString('en-US');

const totalPop = document.querySelector('.total-population');

totalPop.textContent = result;

const averagePop = document.querySelector('.average-population');

averagePop.textContent = resultAver;
