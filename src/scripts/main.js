'use strict';

const spans = document.querySelectorAll('.population');
let totalNumber = 0;
let count = 0;

for (const span of spans) {
  totalNumber += (+span.textContent.split(',').join(''));
  count++;
}

const total = document.querySelector('.total-population');
const avrg = document.querySelector('.average-population');

total.textContent = totalNumber.toLocaleString('en-Us');
avrg.textContent = (totalNumber / count).toLocaleString('en-Us');
