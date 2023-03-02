'use strict';

const populationItem = document.querySelectorAll('.population');

const total = [...populationItem].reduce((accumulator, currentValue) => { 
  const num = strToNum(currentValue.innerText);
  if (isNaN(num)) {
    return accumulator;
  }
  
  return accumulator + num;
}, 0);
  
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
