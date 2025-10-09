'use strict';

// write your code here
const populations = document.querySelectorAll('span.population');
const allText = Array.from(populations).map((span) => span.textContent.trim());

let total = 0;
let validCount = 0;

for (const i of allText) {
  const num = Number(i.replace(/,/g, ''));

  if (!Number.isFinite(num)) {
    continue;
  }

  total += num;
  validCount++;
}

let average;

if (validCount === 0) {
  average = 0;
} else {
  average = total / validCount;
}

document.querySelector('span.total-population').textContent =
  Intl.NumberFormat('en-US').format(total);

document.querySelector('span.average-population').textContent =
  Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(
    Math.round(average));
