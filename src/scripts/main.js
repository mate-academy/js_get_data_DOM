'use strict';

const items = document.getElementsByClassName('population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');
const arr = [...items].map(item => item.innerText);
let sum = 0;

for (const item of arr) {
  const value = +item.split(',').join('');

  sum += value;
}

total.innerText = sum.toLocaleString('en-US');
average.innerText = (sum / arr.length).toLocaleString('en-US');
