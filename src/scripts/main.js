'use strict';

const spans = document.querySelectorAll('.population');
let totalNum = 0;
let count = 0;

for (const span of spans) {
  totalNum += (+span.textContent.split(',').join(''));
  count++;
};

const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

total.textContent = totalNum.toLocaleString();
average.textContent = (totalNum / count).toLocaleString();
