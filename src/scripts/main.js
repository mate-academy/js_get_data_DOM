'use strict';

const allSpans = document.getElementsByTagName('span');
let total = 0;
let count = 0;

for (const element of allSpans) {
  if (element.classList.contains('population')) {
    total += +element.textContent.replace(/,/gi, '');
    count++;
  }
}

const average = total / count;

document.querySelector('.total-population')
  .textContent = total.toLocaleString('en-Us');

document.querySelector('.average-population')
  .textContent = average.toLocaleString('en-Us');
