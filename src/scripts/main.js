'use strict';

const spans = document.querySelectorAll('.population');
// spans.length === 10

let countTotal = 0;

for (const item of spans) {
  countTotal += +(item.textContent.replace(/\D/g, ''));
}

const countAverage = countTotal / spans.length;

// const text = [...spans].map(item => item.innerText);

document.querySelector('.total-population').innerText = countTotal;
document.querySelector('.average-population').innerText = countAverage;
