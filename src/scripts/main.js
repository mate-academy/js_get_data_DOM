'use strict';

const lengthOfList = document.querySelectorAll('.population').length;
const rechangeTotal = document.querySelector('.total-population');
const rechangeAverage = document.querySelector('.average-population');
let total = 0;
let average = 0;

for (let i = 0; i < lengthOfList; i++) {
  let numb = document.querySelectorAll('.population')[i].innerText;

  numb = +numb.split(',').join('');
  total += numb;

  if (i === lengthOfList - 1) {
    average = Math.round(total / i + 1);
  };
};

total = total.toLocaleString('en-US');
average = average.toLocaleString('en-US');

rechangeTotal.innerHTML = `${total}`;
rechangeAverage.innerHTML = `${average}`;
