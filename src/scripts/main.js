'use strict';

const allSpans = document.querySelectorAll('span');
let total = 0;
let count = 0;

for (const span of allSpans) {
  if (span.classList.contains('population')) {
    total += Number(span.textContent.replace(/,/gi, ''));
    count++;
  }
}

const average = total / count;

document.querySelector('.total-population')
  .textContent = total.toLocaleString('en-Us');

document.querySelector('.average-population')
  .textContent = average.toLocaleString('en-Us');
