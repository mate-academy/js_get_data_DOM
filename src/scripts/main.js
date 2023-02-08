'use strict';

const res = [];
const elements = document.querySelectorAll('.population');

for (const item of elements) {
  res.push(+(item.innerHTML.split(',').join('')));
}

const total = res.reduce((el, sum) => el + sum, 0);
const average = (total / res.length).toLocaleString('en-US');
const totalConverted = total.toLocaleString('en-Us');

document.querySelector('.total-population').innerHTML = totalConverted;

document.querySelector('.average-population').innerHTML = average;
