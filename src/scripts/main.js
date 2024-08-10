'use strict';

const spans = document.querySelectorAll('.population');

let total = 0;

for (const span of spans) {
  const text = span.textContent.split(',');
  const str = Number(text.reduce((firstM, secondM) => firstM + secondM));

  span.textContent = str;
  total += str;
}

const average = total / spans.length;

const totalEl = document.querySelector('.total-population');
const averageEl = document.querySelector('.average-population');

totalEl.textContent = total.toLocaleString('en-US');
averageEl.textContent = average.toLocaleString('en-US');
