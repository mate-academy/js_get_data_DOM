'use strict';

// write your code here
const populationNodes = document.querySelectorAll('.population');

const populations = Array.from(populationNodes, (node) => {
  const text = node.textContent.trim();
  const digits = text.replace(/,/g, '');
  const n = Number(digits);

  return n;
});

const total = populations.reduce((sum, n) => sum + n, 0);

let average;

if (populations.length === 0) {
  average = 0;
} else {
  average = total / populations.length;
}

const format = (n) => Math.round(n).toLocaleString('en-US');

document.querySelector('.total-population').textContent = format(total);
document.querySelector('.average-population').textContent = format(average);
