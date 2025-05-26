'use strict';

const spans = [...document.querySelectorAll('.population')];
let total = 0;

for (const span of spans) {
  const text = span.textContent.replace(/,/g, '');
  const str = parseInt(text, 10);

  total += str;
}

const average = Math.round(total / spans.length);

document.querySelector('.total-population').textContent =
  total.toLocaleString('en-Us');

document.querySelector('.average-population').textContent =
  average.toLocaleString('en-Us');
