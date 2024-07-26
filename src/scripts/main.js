'use strict';

// write your code here

function convertToNumber(num) {
  const numbers = num.split(',');

  const finalNumber = numbers.reduce((prev, curr) => prev + curr, '');

  return parseInt(finalNumber);
}

function convertToFormat(num) {
  const numStr = num.toString();

  let finalStr = '';

  for (let i = numStr.length - 1; i >= 0; i--) {
    finalStr = numStr[i] + finalStr;

    if ((numStr.length - i) % 3 === 0) {
      finalStr = ',' + finalStr;
    }
  }

  return finalStr.startsWith(',') ? finalStr.slice(1) : finalStr;
}

const populations = document.getElementsByClassName('population');

let sum = 0;

for (let i = 0; i < populations.length; i++) {
  sum += convertToNumber(populations[i].innerHTML);
}

const total = document.getElementsByClassName('total-population')[0];
const average = document.getElementsByClassName('average-population')[0];

total.innerHTML = convertToFormat(sum);
average.innerHTML = convertToFormat(sum / populations.length);
