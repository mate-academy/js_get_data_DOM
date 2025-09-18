'use strict';

const populationNodes = document.querySelectorAll('.population');

const populations = Array.from(populationNodes).map((node) => {
  const num = Number(node.textContent.replace(/,/g, ''));

  return Number.isFinite(num) ? num : 0;
});

const total = populations.reduce((sum, value) => sum + value, 0);
const average = total / populations.length;

const formatNumber = (n) => n.toLocaleString('en-US');

document.querySelector('.total-population').textContent = formatNumber(total);

document.querySelector('.average-population').textContent = formatNumber(
  Math.round(average),
);
