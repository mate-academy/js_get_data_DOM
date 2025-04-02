'use strict';

// write your code here
const span = document.getElementsByClassName('population');
let value = 0;
let sum = 0;
let averageValue = 0;

for (let i = 0; i < span.length; i++) {
  value = Number(span[i].innerHTML.replace(/,/g, ''));

  sum += value;
}

averageValue = sum / span.length;

const total = document.getElementsByClassName('total-population');
const average = document.getElementsByClassName('average-population');

total[0].innerHTML = sum.toLocaleString('en-US');
average[0].innerHTML = averageValue.toLocaleString('en-US');
