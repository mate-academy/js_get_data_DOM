'use strict';

// write your code here
const fmt = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

const totalElem = document.querySelector('.total-population');
const avgElem = document.querySelector('.average-population');

const nodes = document.querySelectorAll('.population');

const numbers = [...nodes]
  .map((node) => {
    const text = node.textContent.trim();
    const cleaned = text.replace(/[^0-9]/g, '');
    const num = Number(cleaned);

    return Number.isFinite(num) ? num : null;
  })

  .filter((n) => n !== null && n > 0);

if (numbers.length === 0) {
  if (totalElem) {
    totalElem.textContent = '0';
  }

  if (avgElem) {
    avgElem.textContent = '0';
  }
} else {
  const TOTAL = numbers.reduce((sum, n) => sum + n, 0);
  const AVERAGE = TOTAL / numbers.length;

  if (totalElem) {
    totalElem.textContent = fmt.format(TOTAL);
  }

  if (avgElem) {
    avgElem.textContent = fmt.format(AVERAGE);
  }
}
