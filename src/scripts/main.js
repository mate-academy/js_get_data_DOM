'use strict';

const list = document.getElementsByClassName('population');
let sum = 0;

for (const item of list) {
  sum += Number(item.innerText.split(',').join(''));
};

document.getElementsByClassName('total-population')[0]
  .innerText = sum.toLocaleString('en-US');

const avarage = sum / list.length;

document.getElementsByClassName('average-population')[0]
  .innerText = avarage.toLocaleString('en-US');
