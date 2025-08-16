'use strict';

// write your code here

const averageCount = document.querySelectorAll('.population');

let total = 0;
let validCount = 0;

averageCount.forEach((span) => {
  const number = Number(span.textContent.replaceAll(',', ''));

  if (Number.isFinite(number)) {
    total += number;
    validCount += 1;
  }
});

const totalCount = total / validCount;

document.querySelector('.total-population').textContent =
  total.toLocaleString();

document.querySelector('.average-population').textContent =
  totalCount.toLocaleString();
