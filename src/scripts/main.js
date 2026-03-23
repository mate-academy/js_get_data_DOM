'use strict';

const spans = document.querySelectorAll('.population');

const nums = [];

for (const span of spans) {
  const raw = span.textContent.trim();
  const cleaned = raw.replace(/\s|,/g, '');
  const num = Number(cleaned);

  if (Number.isFinite(num)) {
    nums.push(num);
  }
}

const total = nums.reduce((acc, v) => acc + v, 0);

let average = 0;

if (nums.length > 0) {
  average = total / nums.length;
}

const formattedTotal = Math.round(total).toLocaleString('en-US');
const formattedAverage = Math.round(average).toLocaleString('en-US');

document.querySelector('.average-population').textContent = formattedAverage;
document.querySelector('.total-population').textContent = formattedTotal;
