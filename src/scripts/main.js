'use strict';

const items = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

let totalPop = 0;
let averagePop = 0;

for (const item of items) {
  totalPop += +(item.innerText.split(',').join(''));
}

averagePop = totalPop / items.length;

total.innerText = totalPop.toLocaleString('en-US');
average.innerText = averagePop.toLocaleString('en-US');
