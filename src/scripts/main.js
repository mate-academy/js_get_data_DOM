'use strict';

const elements = document.querySelectorAll('.population');
const numbers = [...elements].map(item => +item.textContent.replace(/,/g, ''));
const total = numbers.reduce((sum, a) => sum + a, 0);
const average = total / numbers.length;
const totalCalculate = document.querySelector('.total-population');
const averageCalculate = document.querySelector('.average-population');

totalCalculate.textContent = total.toLocaleString('en-GB');
averageCalculate.innerText = average.toLocaleString('en-GB');
