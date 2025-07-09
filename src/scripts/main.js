'use strict';

// write your code here

function formatNumber(number) {
  return number.toLocaleString('en-US');
}

const populationElements = document.querySelectorAll('.population');

const populations = Array.from(populationElements)
  .map(el => el.textContent.replace(/,/g, '')) 
  .map(Number)                                
  .filter(num => !isNaN(num));                 

const total = populations.reduce((sum, num) => sum + num, 0);
const average = total / populations.length;

document.querySelector('.total-population').textContent = formatNumber(total);
document.querySelector('.average-population').textContent = formatNumber(Math.round(average));
document.querySelector('.average-population').textContent = formatNumber(Math.round(average));