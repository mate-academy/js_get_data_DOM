'use strict';

const lengthOfList = document.querySelectorAll('.population').length;
const rechangeTotal = document.querySelector('.total-population');
const rechangeAverage = document.querySelector('.average-population');
let total = 0;
let average = 0;

const allNum = document.querySelectorAll('.population');

[...allNum].forEach(elem => {
  const add = parseNumber(elem);

  total += add;
});

function parseNumber(elem) {
  const result = elem.innerText;

  return +result.split(',').join('');
};
average = total / lengthOfList;
total = total.toLocaleString('en-US');
average = average.toLocaleString('en-US');

rechangeTotal.innerHTML = `${total}`;
rechangeAverage.innerHTML = `${average}`;
