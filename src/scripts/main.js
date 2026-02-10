'use strict';

// write your code here
const populationNodes = document.querySelectorAll('.population');

const populations = Array.from(populationNodes, (node) => {
  const rawText = node.textContent;
  const normalized = rawText.replace(/,/g, '').trim();
  const n = Number(normalized);

  return n;
}).filter((n) => Number.isFinite(n));

const total = populations.reduce((sum, n) => sum + n, 0);

let average;

if (populations.length === 0) {
  average = 0;
} else {
  average = total / populations.length;
}

const format = (n) =>
  n.toLocaleString('en-US', {
    maximumFractionDigits: 0,
  });

document.querySelector('.total-population').textContent = format(total);
document.querySelector('.average-population').textContent = format(average);
