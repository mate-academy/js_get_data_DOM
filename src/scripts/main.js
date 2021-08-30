'use strict';

// write your code here
const element = document.querySelectorAll('.population');

const test = [...element].map(item => item.textContent);

const str = test.map(x => +x.split(',').join(''));

const total = str.reduce((a, b) => a + b);

const average = total / str.length;

const averPop = document.querySelector('.average-population');

averPop.textContent = average.toLocaleString('en-US');

const totalPop = document.querySelector('.total-population');

totalPop.textContent = total.toLocaleString('en-US');
