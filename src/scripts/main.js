'use strict';

const spans = document.querySelectorAll('.population');
let totalNumber = 0;
let count = 0;

for (const span of spans) {
  totalNumber += (+span.textContent.split(',').join(''));
  count++;
}

document.querySelector('.total-population').textContent
  = totalNumber.toLocaleString('en-ES');

document.querySelector('.average-population').textContent
  = (totalNumber / count).toLocaleString('en-ES');
