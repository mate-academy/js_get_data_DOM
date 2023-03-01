'use strict';

const populationItem = document.querySelectorAll('.population');

const arrayOfNumbers = [...populationItem].map(item =>
  strToNum(item.innerText)).filter(num => !isNaN(num));

const total = arrayOfNumbers.reduce((accumulator, currentValue) =>
  accumulator + currentValue);

const result = total.toLocaleString('en-US');

const average = total / arrayOfNumbers.length;

const resultAver = average.toLocaleString('en-US');

function strToNum(str) {
  return parseInt(str.replace(/,/g, ''));
}

const totalPop = document.querySelector('.total-population');

totalPop.textContent = result;

const averagePop = document.querySelector('.average-population');

averagePop.textContent = resultAver;
