'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const nodes = Array.from(document.querySelectorAll('.population'));
  const raw = nodes.map((n) => n.textContent.trim()).filter((n) => n !== '');

  const numbers = raw
    .map((n) => n.replace(/[^\d]/g, ''))
    .filter((n) => n !== '')
    .map((n) => Number(n))
    .filter((n) => Number.isFinite(n));

  if (!numbers.length) {
    return;
  }

  const total = numbers.reduce((sum, n) => sum + n, 0);
  const average = Math.round(total / numbers.length);

  const sample = nodes[0].textContent;
  const separator = sample.includes(',')
    ? ','
    : sample.includes('.')
      ? '.'
      : ' ';

  const fmt = (n) => n.toLocaleString('en-US').replace(/,/g, separator);

  const totalE1 = document.querySelector('.total-population');
  const avgE1 = document.querySelector('.average-population');

  if (totalE1) {
    totalE1.textContent = fmt(total);
  }

  if (avgE1) {
    avgE1.textContent = fmt(average);
  }
});
