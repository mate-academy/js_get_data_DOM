'use strict';

const populations = document.querySelectorAll('.population');

let total = 0;
let validCount = 0;

for (const el of populations) {
  const clean = el.textContent.replace(/,/g, '').trim();

  if (!clean || !/\d/.test(clean)) {
    continue;
  }

  const num = Number(clean);

  if (Number.isFinite(num)) {
    total += num;
    validCount++;
  }
}

const average = validCount > 0 ? total / validCount : null;

const tagTotal = document.querySelector('.total-population');
const tagAverage = document.querySelector('.average-population');

if (Number.isFinite(total) && tagTotal) {
  tagTotal.textContent = total.toLocaleString();
}

if (Number.isFinite(average) && tagAverage && validCount > 0) {
  tagAverage.textContent = Math.round(average).toLocaleString();
}
